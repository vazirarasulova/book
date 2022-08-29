import { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import axios from "axios";
import "./singleAuthor.css";

export const SingleAuthor = () => {
  const {id} = useParams();
  const { token } = useContext(AuthContext);
  
  const [author, setAuthor] = useState({
    isLoading: true,
    isError: false,
    data: {}
  });
  
  const [books, setBooks] = useState({
    isFetched: false,
    isError: false,
    data: {}
  });
  
  useEffect(() => {
    axios
    .get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
    headers: {
      Authorization: token.token,
    },
  })
  .then((res) => setAuthor(res.data))
  .catch((err) => console.log(err));
  
  axios
  .get(`https://book-service-layer.herokuapp.com/author/books/${id}`, {
  headers: {
    Authorization: token.token,
  },
})
.then(function(response){
  setBooks({
    isFetched:true,
    data:response.data,
    error:false,
  })
})

.catch(function(error){
  setBooks({
    isFetched:true,
    data:{},
    error:error,
  })
}

);
}, [token, id])

console.log(books.data);
return(
  
  <div className="single">
  
  <>
  
  <div className="single__inner">
  <img className="single__img" src={"https://book-service-layer.herokuapp.com/" + author.image } alt={author.first__name} width="550" height={779}/>
  <div className="single__year">
  <span className="single__subbox">
  <p className="single__subtext">Tavallud sanasi</p>
  <p className="single__years">{`5-AVG ${author.date_of_birth} -  24-MaY   ` }</p>
  <p className="single__country">{author.country}</p>
  </span>
  <span className="single__subbox">
  <p className="single__subtext">Tavallud sanasi</p>
  <p className="single__years">{ author.date_of_birth} </p>
  <p className="single__country">{author.country} </p>
  </span>
  </div>
  </div>
  
  </>
  
  <div className="single__box">
  <div className="single__info">
  <h1 className="single__title">{`${author.first_name} ${author.last_name}`}</h1>
  <p className="single__text">{author.bio}</p>
  </div>
  <div className="single__books">
    <div className="single__subboks">
    <h2 className=" single__books-title">ASaRRaRI</h2>
    <NavLink className={'books__link'} to={`/booksingle/${books.id}`}>
      <p className="single__bokks-text">Barchasini ko'rish</p>
    </NavLink>
    </div>
    <ul className="books__list">
  {books.isFetched&& (
    books.data.map((item) => {
      
      return (
        
        <li className="books__item">
  
          <img className="single__books-img" src={"https://book-service-layer.herokuapp.com/" + item.image } alt={item.title} width="165" height={247}/>
          <h3 className="books__name">{item.title}</h3>
          <p className="books__comments">{`4.1 • ${item.year} ta fikrlar`}</p>
        
        </li>
        )
      })
      ) }
      
      </ul>
      
      </div>
      </div> 
      </div>
      );
    };
    