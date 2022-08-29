import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category } from '../../components/Category/Category';
import { Jadid } from '../Jadid/Jadid';
import { Mustaqillik } from '../Mustaqillik/Mustaqillik';
import { SingleAuthor } from '../SingleAuthor/SingleAuthor';
import { SingleBook } from '../SingleBook/SingleBook';
import { Sovet } from '../Sovet/Sovet';
import { Temuriylar } from '../Temuriylar/Temuriylar';

import './home.css';

export const Home = () => {
	return (
		<div className='main'>
			<Category />
			<Routes>
				<Route index element={<Temuriylar />} />
				<Route path='jadid' element={<Jadid />} />
				<Route path='jadid/:id' element={<SingleAuthor/>} />
				<Route path='sovet' element={<Sovet />} />
				<Route path='mustaqillik' element={<Mustaqillik />} />
			</Routes>
		</div>
	);
};
