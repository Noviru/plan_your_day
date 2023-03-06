import { useRef } from 'react';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
const Login : React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dataRef = useRef<HTMLInputElement>(null);

  //Uses the built in function signInWithEmailAndPassword with firebase to check the database and if 
  // It is successful we navigate the user to the homepage and send the userdata to it.
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setUsername(username);
    setPassword(password); 
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in successfully!");
      console.log("Username: " + user);
      const db = getFirestore();
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log(userData);
        navigate('/planyourday', { state: { userData: userData }});
        // Pass the userData to your homepage component
      }
      
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