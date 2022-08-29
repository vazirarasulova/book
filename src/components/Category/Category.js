import { NavLink } from 'react-router-dom';
import { Temuriylar } from "../../pages/Temuriylar/Temuriylar";
import { Jadid } from "../../pages/Jadid/Jadid";
import { Sovet } from "../../pages/Sovet/Sovet";
import { Mustaqillik } from "../../pages/Mustaqillik/Mustaqillik";

import "./category.css";

export const Category = () => {
  return (
    <div className="category">
      <h2 className="category__title">ASOSiY KaTeGORiYaLaR</h2>
      
      
			<nav className='nav category__nav'>
				<ul className='nav__list category__nav-list'>

					<NavLink className='nav__item' to='/'>
						<span className='nav__text'>Temuriylar davri</span>
					</NavLink>
					<NavLink className='nav__item' to='jadid'>
						<span className='nav__text'>Jadid adabiyoti</span>
					</NavLink>
					<NavLink className='nav__item' to='sovet'>
						<span className='nav__text'>Sovet davri</span>
					</NavLink>
					<NavLink className='nav__item' to='mustaqillik'>
						<span className='nav__text'>Mustaqillik davri</span>
					</NavLink>
					
				</ul>
			</nav>
    </div>
  )
}