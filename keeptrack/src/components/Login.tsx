import React from 'react';
import {useNavigate} from "react-router-dom"
import Register from "./Register";
import { useState } from 'react';
import { user } from '../../lib/types';

const users: Array<user> = [];

function validate_login(username: String, password: String): boolean{
  const len = users.length 
  for (let i = 0; i < len; i = i + 1) {
    let current_user = users[i]
    if (username === current_user.username && password === current_user.password) {
      return true;
    }  
  }
  return false; 
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
       <button onClick={()=>navigate("/planyourday") }>Test button</button>
      </>
  )
};
  
export default Login;