import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { AuthContext } from '../../context/authContext';

import './jadid.css';
export const Jadid = () => {
	const { token } = useContext(AuthContext);
	console.log(token);
	const [jadid, setJadid] = useState([]);
	const [book, setBook] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/2', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => setJadid(data.data))
			.catch((err) => console.log(err));

				axios
					.get('https://book-service-layer.herokuapp.com/book/genreId/2' , {
						headers: {
							Authorization: token.token,
						},
					})
					.then((res) => setBook(res.data))
					.catch((err) => console.log(err));
			
	}, [token]);

	return (
		<div>
			<ul className='list'>
				{jadid.length ? (
					jadid.map((el) => <Card key={el.id} item={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</ul>
		</div>
	);
};
