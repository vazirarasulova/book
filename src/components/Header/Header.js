import {Link, NavLink } from 'react-router-dom';
import { Home } from "../../pages/Home/Home"
import { Nasr } from '../../pages/Nasr/Nasr';
import { Kitoblar } from '../../pages/Kitoblar/Kitoblar';
import { Maqolalar } from '../../pages/Maqolalar/Maqolalar';
import { Forum } from '../../pages/Forum/Forum';
import User from "../../assets/images/Img/user.png"
import {Vector} from "../../assets/images/Icons/Icons"
import './header.css';

import React from "react"
import Logo from '../../assets/images/Icons/Icons';
import LogOut from '../../pages/Logout/Logout';



export const Header = () =>{
	return (
		<div className="header">
		<NavLink className='header__logo' to='/'> <Logo/> </NavLink>
		
		<nav className='nav'>
		<ul className='nav__list'>
		<NavLink className='nav__item' to='/'>Bosh sahifa</NavLink>
		<NavLink className='nav__item' to='/Nasr'>Nasr</NavLink>
		<NavLink className='nav__item' to='/Kitoblar'>Kitoblar</NavLink>
		<NavLink className='nav__item' to='/Maqolalar'>Maqolalar</NavLink>
		<NavLink className='nav__item' to='/Forum'>Forum</NavLink>
		</ul>
		</nav>

		<div className='header__box'>
		<img className='header__img' src={User} alt="User image"/>
		<Vector/>
		</div>
		</div>
		)
	}