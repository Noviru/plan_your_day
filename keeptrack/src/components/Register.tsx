import "firebase/auth";
import "firebase/database";
import { useState } from "react";
import 'firebase/firestore';
import { signupUser } from '../firebase-setup/firebase';
import image from "./resources/pyd.png"
import { useNavigate } from "react-router-dom";



const Register = () => {
      const navigate = useNavigate();
      const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        activities: []
      }) ;

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });

      };
    
      const handleSignup: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const signUp = () => signupUser(userDetails)();
        signUp(); 
      };

      return (
        <form onSubmit={handleSignup} className="Input">
           <div className="login_container">
            <div className="login">
              <img src={image} className="image" />
              <input type="text"
                name="username"
                className='input_login_field'
                placeholder = 'Enter username' 
                value={userDetails.username}
                onChange={handleChange}></input>
              
              <input type="email" 
                name="email"
                className='input_login_field'
                placeholder = 'Enter email'   
                value={userDetails.email}
                onChange={handleChange}></input>
              
              <input type="password" 
                name="password"
                className='input_login_field'
                placeholder = 'Enter password'   
                value={userDetails.password}
                onChange={handleChange}></input>
              
              <button className="login_button" type="submit">Register</button>
              
            <h1 className="login_text">Already have an account?</h1>
            
            <button className="login_button" onClick={()=>navigate("/") }>Log in</button>
          </div>  
        </div> 
        </form>
      );
    };
  
  export default Register;