import React from 'react';
import {useNavigate} from "react-router-dom"


function validate_reg(username: string, password: string, password_conf: string){


}

const Register = () => {
  const navigate = useNavigate();
  return (
      <>
        <center><h1 style={{color:"green"}}>Sign up Here</h1></center>
        <form className = "Input">
          <input type = "input" placeholder='Enter username' className = "input_username"></input>
          <input type = "input" placeholder='Enter a password' className = "input_password"></input>
          <input type = "input" placeholder='Confirm password' className = "input_password_conformation"></input>
          <button onClick={ ()=>navigate("/register")}>Register</button>
       </form>
      </>
  )
};
  
export default Register;


