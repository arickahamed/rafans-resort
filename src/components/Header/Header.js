import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link className="link" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/book">Book</Link>
                    </li>
                    <li>
                        <Link className="link" to="/signin">Sign in</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-text">
                <h1>Rafan's Resort</h1>
                <Typical
                    steps={['', 1000, ' Where you feels like home..!', 500]}
                    loop={Infinity}
                    wrapper="h5"
                />
            </div>
        </div>
    );
};

export default Header;