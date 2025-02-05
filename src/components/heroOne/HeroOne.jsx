import React from 'react';
import './HeroOne.css';
import LightLargeBtn from '../lightLargeBtn/LightLargeBtn';
import DarkLargeBtn from '../darkLargeBtn/DarkLargeBtn'
import ellipse from '../../assets/ellipse.svg';
import phones from '../../assets/phones.png';
const HeroOne = () => {
    return (
        <div className="hero-one-contianer">
            <div className="background-circles">
                <img className="ellipse-one" src={ellipse} alt="" />
                <img className="ellipse-two" src={ellipse} alt="" />
            </div>
            <div className = "hero-one-content">
                <div className="section-one">
                    <h1 className="hero-one-tagline">We boost your brand to thrive in the digital world.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="grid">
                        <DarkLargeBtn className="book-button" text="Book a meeting" onClick={() => alert('Hello, world!')} />
                        <a href="/">Our Solutions</a>
                    </div>
                </div>
                <img src={phones} alt="" className="phones-image" />
            </div>
        </div>
    );
};

export default HeroOne;