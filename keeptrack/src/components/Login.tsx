import React from 'react';
import { useRef } from 'react';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import { user } from '../../lib/types';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getDatabase} from 'firebase/database';


const users: Array<user> = [];
const firebaseConfig = {
  apiKey: "AIzaSyActyc0EURxdOSHtEPa90QgX9SIZ4vexyo",
  authDomain: "planyourday-115be.firebaseapp.com",
  projectId: "planyourday-115be",
  storageBucket: "planyourday-115be.appspot.com",
  messagingSenderId: "510378387748",
  appId: "1:510378387748:web:c550a8b828007e03d22bb1",
  measurementId: "G-CPWJ106R0S"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dataRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setUsername(username);
    setPassword(password); 
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in successfully!");
      navigate("/planyourday");
    } catch (error) {
      console.error(error);
      
    }
    
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
          <input type = "input" 
                 placeholder = 'Enter a email' 
                 value = {email}
                 onChange = {(event) => 
                  setEmail(event.target.value)}></input>
          
          <button onClick={()=>navigate("/")}>Login</button>
       </form>
       <h1>No Account yet? Sign up here!</h1>
       <button onClick={()=>navigate("/register") }>Register</button>
       <button onClick={()=>navigate("/planyourday") }>Test button</button>
       
       
      </>
  )
};
  
export default Login;