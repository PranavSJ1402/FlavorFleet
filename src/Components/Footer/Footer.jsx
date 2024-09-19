import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

function Footer() {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h3>FlavorFleet</h3>
          <p className="footer-tagline">
            Delivering joy to your doorstep, one dish at a time. From your favorite local bites to exotic cuisines, we ensure every meal is prepared with love and delivered with care.
          </p>
          <div className="socialmedia">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>contact@flavorfleet.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">&copy; 2024 FlavorFleet.com - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
