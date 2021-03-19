import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import  firebaseConfig from "./firebase.config";
import {UserContext} from "../../App"
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoggleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    const{displayName,email} = result.user;
    const signedInUser ={name:displayName,email}
  setLoggedInUser(signedInUser);
  history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    const handleFacebookSignIn =()=>{
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    const{displayName,email} = result.user;
    const signedInUser ={name:displayName,email}
  setLoggedInUser(signedInUser);
  history.replace(from);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });

    }
    return (
        
          
        
          <div style={{textAlign: 'center'}}>
            <h1>This is logIn</h1>
            <button onClick={handleGoggleSignIn} variant="warning">Google Sign In</button>
            <br/>
            <button onClick={handleFacebookSignIn} variant="warning">Fb Sign  In</button>


      </div>
    );
};

export default LogIn;