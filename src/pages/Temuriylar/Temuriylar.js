import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { AuthContext } from '../../context/authContext';

import './temuriylar.css';
export const Temuriylar = () => {
	const { token } = useContext(AuthContext);
	console.log(token);
	const [temuriylar, setTemuriylar] = useState([]);
	console.log(temuriylar);
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/1', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => setTemuriylar(data.data))
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<div>
			<ul className='list'>
				{temuriylar.length ? (
					temuriylar.map((el) => <Card key={el.id} item={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</ul>
		</div>
	);
};
