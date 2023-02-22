import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
//import { app } from '../firebase-setup/firebase';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import 'firebase/database';



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

  const Register = () => {
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      const handleSignup = async (event: any) => {
        event.preventDefault();
        try {
          const auth = getAuth(app);
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          const db = getDatabase(app);
          const userData = {
            username: username,
            email: email
          };
          await set(ref(db, `users/${user.uid}`), userData);
          console.log("User created successfully!");
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <form onSubmit={handleSignup}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Sign up</button>
        </form>
      );
    };
  
  export default Register;