import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { AuthContext } from '../../context/authContext';

import './sovet.css';

export const Sovet = () => {
	const { token } = useContext(AuthContext);
	console.log(token);
	const [sovet, setSovet] = useState([]);
	console.log(sovet);
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/3', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => setSovet(data.data))
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<div>
			<ul className='list'>
				{sovet.length ? (
					sovet.map((el) => <Card key={el.id} item={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</ul>
		</div>
	);
};
