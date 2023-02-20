import React from 'react';
import {useNavigate} from "react-router-dom"
import Register from "./Register";
import { useState } from 'react';


function validate_login(username: String, password: String): boolean{
  return true;
}
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setUsername(username);
    setPassword(password); 
  };
  return (
      <>
        <h1 style={{color:"green"}}>Welcome to PlanYourDay, Please login</h1>
        <form onSubmit = {handleSubmit} className = "Input">
          <input type = "input" 
                 placeholder = 'Enter username' 
                 value = {username} 
                 onChange = {(event) => 
                  setUsername(event.target.value)}></input>
          <input type = "input" 
                 placeholder = 'Enter a password' 
                 value = {password}
                 onChange = {(event) => 
                  setPassword(event.target.value)}></input>
          
          <button onClick={()=>navigate("/")}>Login</button>
       </form>
       <h1>No Account yet? Sign up here!</h1>
       <button onClick={()=>navigate("/register") }>Register</button>
      </>
  )
};
  
export default Login;