import React from 'react';
import "./Hero.css";
import hand_icon from '../Assests/wave.png';
import Heroimage from '../Assests/Hero.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> Lets SHop with New Trends with GlamMart  </h2>
        
        <div>
        <div className="hand-hand-icon">
            <p> Hi !!<img src={hand_icon} alt="" />  Everyone </p> 
            
        </div>
        <p>WE ARE EXCITED TO PRESENT </p>
        <p> Collections </p>
        <p>for Everyone </p>
        </div>
        <div className="hero-latest-btn">
            <div>
                <button  > Latest Collections </button>
            </div>
        </div>
        </div>
        <div className="hero-right">
            <img src= {Heroimage} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
