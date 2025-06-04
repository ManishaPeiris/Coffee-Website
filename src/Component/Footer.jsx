import React from 'react';
import "../Styles/Footer.css"; 
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>No. 42, Kandy Road, Peradeniya, Sri Lanka</p>
        <p>+94 77 123 4567</p>
        <p>hello@ceylonbrew.lk</p>
      </div>

      <div className="footer-center">
        <div className="logo-circle"></div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>No. 17, Temple Road, Nugegoda, Colombo, Sri Lanka</p>
        <p>+94 76 845 2310</p>
        <p>info@cafesereno.lk</p>
      </div>
    </footer>
  );
};

export default Footer;
