import "./search.css"

export const Search = () =>{
	return (
    <div className="search">
      <h2 className="search__title">QiDiRiSH</h2>
     <div className="search__box">
     <input className="search__input" placeholder="Adiblar, kitoblar, audiolar, maqolalar..."/>
      <button className=" search__btn" >Izlash</button>
     </div>
    </div>
  )
  }