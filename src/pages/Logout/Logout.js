import React from "react";
import { AuthContext } from "../../context/authContext";

import "./logout.css";

const LogOut = () => {

const {setToken} = React.useContext(AuthContext);

return (
  <>

  <button className="logout__btn" onClick={() => setToken(false)}>Log out</button>

  </>
)
}

export default LogOut;