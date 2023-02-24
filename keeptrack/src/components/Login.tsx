import { useRef } from 'react';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getDatabase} from 'firebase/database';
import image from "./resources/pyd.png"

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
    setPassword(password);
  };

  return (
    <> 
      <form onSubmit={handleSubmit} className="Input">
        <div className="login_container">
          <div className="login">
            <img src={image} className="image"/>
            <input type="email"
                    className='input_login_field'
                    placeholder = 'Enter email' 
                    value = {email} 
                    onChange = {(event) => 
                      setEmail(event.target.value)}></input>
            <input type="password" 
                    className='input_login_field'
                    placeholder = 'Enter password' 
                    value = {password}
                    onChange = {(event) => 
                      setPassword(event.target.value)}></input>
            <button className="login_button" onClick={() => navigate("/")}>Login</button>
            <h1 className="login_text">No Account yet?</h1>
            <button className="login_button" onClick={()=>navigate("/register") }>Sign Up</button>
          </div>
        </div>  
       </form>
       
      </>
  )
};
  
export default Login;