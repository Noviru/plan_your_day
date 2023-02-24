// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database'

// Import the Firestore type
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyActyc0EURxdOSHtEPa90QgX9SIZ4vexyo",
  authDomain: "planyourday-115be.firebaseapp.com",
  projectId: "planyourday-115be",
  storageBucket: "planyourday-115be.appspot.com",
  messagingSenderId: "510378387748",
  appId: "1:510378387748:web:c550a8b828007e03d22bb1",
  measurementId: "G-CPWJ106R0S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.database();
export const firestore = firebase.firestore()
export default firebase;

export const signupUser = (userDetails: any) => {
  console.log("Please?");
  //deconstruct the users details we will need these later
  const {username, email, password, activities} = userDetails
  console.log("Please1?");
  return () => {
      //user firebase using the appropriate firebase method
      console.log("Please3?");
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
          //Once the user creation has happened successfully, we can add the currentUser into firestore
          //with the appropriate details.
          if(firebase.auth().currentUser !== null){ 
          firebase.firestore().collection('users').doc(firebase.auth().currentUser!.uid)
          .set({
              email: email,
              username: username,
              activities: [],
              password: password
          })
        
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
              console.log('Something went wrong with added user to firestore: ', error);
          })
        }
      })
      //we need to catch the whole sign up process if it fails too.
      .catch(error => {
          console.log('Something went wrong with sign up: ', error)
        });
  }
};


//const auth = getAuth(app);