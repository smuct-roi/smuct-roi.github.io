import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Members', path: '/members' },
    { name: 'Posts', path: '/posts' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-root">
      <div className="navbar-container">
        <div className="navbar-flex">

          {/* Logo Section */}
          <div className="navbar-logo-wrapper">
            <Link to="/" className="navbar-logo-link">
              <img
                src="\logo\logo.png"  // replace with your logo path
                alt="SMUCT Robotics & IoT Logo"
                className="logo-image"
              />
              <span className="logo-text"></span>
            </Link>
          </div>


          {/* Desktop Links */}
          <div className="desktop-nav">
            <div className="desktop-links-wrapper">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-active' : 'nav-inactive'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="toggle-button"
            >
              <svg className="toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-links-wrapper">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-link ${isActive(link.path) ? 'mobile-active' : 'mobile-inactive'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;