import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { AuthContext } from '../../context/authContext';


export const Mustaqillik = () => {
	const { token } = useContext(AuthContext);
	console.log(token);
	const [mustaqillik, setMustaqillik] = useState([]);
	console.log(mustaqillik);
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/4', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => setMustaqillik(data.data))
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<div>
			<ul className='list'>
				{mustaqillik.length ? (
					mustaqillik.map((el) => <Card key={el.id} item={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</ul>
		</div>
	);
};
