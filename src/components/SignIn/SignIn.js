import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin_conatiner">
            <button className="icon_button">Sign in with <FaGoogle /></button>
            <br />
            <button className="icon_button">Sign in with <FaFacebook /></button>
        </div>
    );
};

export default SignIn;