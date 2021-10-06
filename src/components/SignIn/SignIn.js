import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "../FirebaseConfig/Firebase.config";
import "./SignIn.css";

firebase.initializeApp(firebaseConfig);

const SignIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    // google signin popup starts
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };
  // google sigin popup ends

    const handleClick = () => {
        console.log("sign in button clicked!");
    };

    return (
        <div className="signin_conatiner">
        <button onClick={() => handleGoogleSignin()} className="icon_button">
            Sign in with <FaGoogle />
        </button>
        <br />
        <button onClick={() => handleClick()} className="icon_button">
            Sign in with <FaFacebook />
        </button>
        </div>
    );
};

export default SignIn;
