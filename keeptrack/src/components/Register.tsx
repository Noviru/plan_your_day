import React from 'react';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import { user, activity } from '../lib/types';

import * as fs from 'fs';

const JSON_PATH: string = "../../users"


function write_to_json(user: user): void{
  
}

function validate_reg(username: string, password: string, password_conf: string){
    if(password === password_conf){
        // Kryptera lösenord eventuellt
        //const empty_list: List<activity> = list();
        //const user: user = {username: username,password: password, activites: empty_list}

    }
    else{
      //Skickar tillbaka något error, fixa sen
    }

}

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setMessage(`Hello ${username} ${password}!`);
    setUsername(username);
    setPassword(password);
    console.log(password);
    validate_reg(username,password,password);
  };
  
  return (
      <>
        <center><h1 style={{color:"green"}}>Sign up Here</h1></center>
        <form onSubmit = {handleSubmit} className = "Input">
          <input type = "input" placeholder='Enter username' value = {username} onChange = {(event) => setUsername(event.target.value)}></input>
          <input type = "input" placeholder='Enter a password' value = {password} onChange = {(event) => setPassword(event.target.value)}></input>
          <input type = "input" placeholder='Confirm password' value = {password} onChange = {(event) => setPassword(event.target.value)}></input>
          <button
          type="submit"
          className="registerButton"
        >
          Sign Up
        </button>
          <button onClick={ ()=>navigate("/")}>Back</button> 
       </form>
      </>
  )
};
  
export default Register;


