import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category } from '../../components/Category/Category';
import { Jadid } from '../Jadid/Jadid';
import { Mustaqillik } from '../Mustaqillik/Mustaqillik';
import { SingleBook } from '../SingleBook/SingleBook';
import { Sovet } from '../Sovet/Sovet';
import { Temuriylar } from '../Temuriylar/Temuriylar';

import './kitoblar.css';

export const Kitoblar = () => {
	return (
		<div className='main'>
			<Category />
			<Routes>
				<Route index element={<Temuriylar />} />
				<Route path='jadid' element={<Jadid />} />
				<Route path='sovet' element={<Sovet />} />
				<Route path='mustaqillik' element={<Mustaqillik />} />
			</Routes>
		</div>
	);
};
