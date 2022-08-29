import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Nasr } from './pages/Nasr/Nasr';
import { Kitoblar } from './pages/Kitoblar/Kitoblar';
import { Maqolalar } from './pages/Maqolalar/Maqolalar';
import { Forum } from './pages/Forum/Forum';
import { Temuriylar } from './pages/Temuriylar/Temuriylar';
import { Jadid } from './pages/Jadid/Jadid';
import { Sovet } from './pages/Sovet/Sovet';
import { Mustaqillik } from './pages/Mustaqillik/Mustaqillik';
import { Hero } from './components/Hero/Hero';
import { Search } from './components/Search/Search';

const AuthenticationApp = () => {
	return (
		<div className='container'>
			<Header />
			<Hero />
			<Search />

			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/nasr' element={<Nasr />} />;
				<Route path='/kitoblar' element={<Kitoblar />} />;
				<Route path='/maqolalar' element={<Maqolalar />} />;
				<Route path='/forum' element={<Forum />} />;
			</Routes>
		</div>
	);
};

export default AuthenticationApp;
