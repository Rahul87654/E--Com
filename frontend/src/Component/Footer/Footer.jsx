import React from 'react'
import './Footer.css';
import footer_logo from '../Assests/logo.jpg'
import facebook from '../Assests/facebook.png';
import whatsapp from '../Assests/whatsapp.png';
import instagram from '../Assests/instagram.png';
import linkedin from '../Assests/linkedin.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p> GLAMMART </p>
      </div>
      <ul className="footer-links">
        <li>Comapny </li>
        <li> Products </li>
        <li> Offices </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={facebook} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={linkedin} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> CopyRights @ 2024 Rahul Choudhary </p>
      </div>
    </div >
  )
}

export default Footer;
