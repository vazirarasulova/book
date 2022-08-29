import { Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

const UnAuthenticationApp = () => {
  
  return (
    <>
    <Routes>

    <Route path='/' element={<Login />} />;
    <Route path="/register" element={<Register/>}/>
    </Routes>
    
    </>
    
    )
  }
  
  
  export default UnAuthenticationApp;