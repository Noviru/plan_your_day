import React from 'react';
import {useNavigate} from "react-router-dom"
import Register from "./Register";


function validate_login(username: String, password: String): boolean{

  return true;
}
const Login = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <h1 style={{color:"green"}}>Welcome to PlanYourDay, Please login</h1>
        <form className = "Input">
          <input type = "input" placeholder='Enter username' className = "input_username"></input>
          <input type = "input" placeholder='Enter a password' className = "input_password"></input>
          
          <button onClick={()=>navigate("/")}>Login</button>
       </form>
       <h1>No Account yet? Sign up here!</h1>
       <button onClick={()=>navigate("/register") }>Register</button>
      </>
  )
};
  
export default Login;