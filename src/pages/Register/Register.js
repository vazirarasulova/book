import React from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Registration from "../../assets/images/Img/registretion.png"
import axios from "axios";
import "./register.css"

export const Register = () => {
  const {token, SetToken} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [first_name, last_name, number, email, password] = evt.target.elements;
    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('phone', number.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    axios
    .post('https://book-service-layer.herokuapp.com/user/register', formData)
    .then((data) =>{
if(data.data){
  SetToken(data.data);
  navigate('/');
}

    })
    .catch((err) => console.log(err));
  };

  return(
    <div className="register">
      <div className="register__inner">
        <img className="register__img" src={Registration} alt="Registration process"/>
      </div>

      <div className="register__box">

        <h2 className="register__title">Sign up</h2>
        <p className="register__text">Already have an account?    <NavLink className='register__subtext' to='/'>Sign in</NavLink></p>

      <form className="form" onSubmit={handleUserRegister}>
      <input className="form__input" type="text" name="first_name" placeholder="First name"/>
      <input className="form__input" type="text" name="last_name" placeholder="Last name"/>
      <input className="form__input" type="text" name="phone" placeholder="Phone"/>
      <input className="form__input" type="email" name="email" placeholder="Email"/>
      <input className="form__input" type="text" name="password" placeholder="Password"/>
      <button className="form__btn" type="submit">Register</button>
    </form>
         </div>
    
    </div>
  )
}