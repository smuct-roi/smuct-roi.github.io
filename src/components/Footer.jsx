/*
  Footer.jsx — Site footer component
  - Renders quick links, brand visuals, and social links
  - Sections: brand, quick links, socials, bottom bar
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// --- Footer component: renders site footer and quick links
const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-logo-wrapper">
              <span className="footer-logo-text">SMUCT-Robotics & IoT Community</span>
            </div>
            
            {/* Added PNG Section */}
            <div className="footer-brand-images">
              <img src="/logo/SMUCT-logo.png" alt="SMUCT" className="footer-png" />
              <img src="/logo/logo2.png" alt="SMUCT-RoI" className="footer-png" />
            </div>

            <p className="footer-description">
              {/* Description text if needed */}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/projects" className="footer-link">Browse Projects</Link></li>
              <li><Link to="/members" className="footer-link">Our Team</Link></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="footer-links-column">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social-flex">
              <a href="https://github.com/smuct-roi" className="footer-link">GitHub</a>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Discord</a>
              <a href="https://www.facebook.com/share/1DEvs5XabH/" className="footer-link">FaceBook</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">&copy; {new Date().getFullYear()} SMUCT Robotics & IoT Community. All rights reserved.</p>
          <Link to="/members/smuct-22307109" className="footer-tagline" aria-label="Open developer profile">Developed By NH.Fahad</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;