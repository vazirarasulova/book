import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Registration from '../../assets/images/Img/registretion.png';
import axios from 'axios';

export const Login = () => {
	const { token, SetToken } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleUserLogin = (evt) => {
		evt.preventDefault();
		const [email, password] = evt.target.elements;
		const formData = new FormData();
		formData.append('email', email.value);
		formData.append('password', password.value);
		axios
			.post('https://book-service-layer.herokuapp.com/user/login', formData)
			.then((data) => {
				if (data.data) {
					SetToken(data.data);
					navigate('/');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='register'>
			<div className='register__inner'>
				<img
					className='register__img'
					src={Registration}
					alt='Registration process'
				/>
			</div>

			<div className='register__box'>
				<h2 className='register__title'>Sign in</h2>
				<p className='register__text'>
					Do not you have an account?
					<NavLink className='register__subtext' to='/register'>
						Sign up
					</NavLink>
				</p>

				<form className='form' onSubmit={handleUserLogin}>
					<input
						className='form__input'
						type='email'
						name='email'
						placeholder='Email'
					/>
					<input
						className='form__input'
						type='text'
						name='password'
						placeholder='Password'
					/>
					<button className='form__btn' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
