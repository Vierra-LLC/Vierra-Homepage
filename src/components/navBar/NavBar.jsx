import React from 'react';
import './NavBar.css';
import logo from '../../assets/vierra-logo.svg';
import LightLargeBtn from '../lightLargeBtn/LightLargeBtn';
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo-link-container">
                <img src={logo} alt="Vierra Logo" className="navbar-logo" />
                <ul className="navbar-links">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Solutions</a></li>
                    <li><a href="/">Cases</a></li>
                </ul>
            </div>
            <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
        </nav>
    );
};

export default NavBar;