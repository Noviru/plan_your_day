
import "firebase/auth";
import "firebase/database";
import { useState } from "react";
import 'firebase/firestore';
import { signupUser } from '../firebase-setup/firebase';



  const Register = () => {
      const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        activities: []
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
      };
    
      const handleSignup = async (event: any) => {  
        event.preventDefault();
        const signUp = () => signupUser(userDetails)();
        signUp(); 
      };

      
    
      return (
        <form onSubmit={handleSignup}>
          <label>
            Username:
            <input type="text" name="username" value={userDetails.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={userDetails.password} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Sign up</button>
        </form>
      );
    };
  
  export default Register;