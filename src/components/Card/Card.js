import {Link} from 'react-router-dom'

import "./card.css"

export const Card = ({item}) => {
  return(
    <li className="card">
      <Link to={`/jadid/${item.id}`} className="">
      <img className="card__img" src={"https://book-service-layer.herokuapp.com/" + item.image } alt={item.name} width="173" height={132}/>
      <h3 className="card__title">{`${item.first_name} ${item.last_name}`}</h3>
        <p className="card__year">{`${item.date_of_birth} - ${item.date_of_death}`}</p>
        </Link>
    </li>
  );
};