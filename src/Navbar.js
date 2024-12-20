import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="navbar">

      <div className="logo"><a href="/" class="logo">𝑪𝒍𝒐𝒖𝒅 𝑨𝒕𝒍𝒂𝒔</a>
</div>

      <nav className="nav">
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/data-engineer">Data Engineer</Link></li>
          <li><Link to="/java-fullstack">Java Fullstack</Link></li>
          <li><Link to="/data-scientist">Data Scientist</Link></li>
          <li><Link to="/data-analytics">Data Analytics</Link></li>
          <li><Link to="/aws">AWS</Link></li>
          <li><Link to="/all-courses">All Courses</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span ></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="contact-info">
        <p className=''>✉️ cloudatlas01@gmail.com</p>
        <p>📞 9960222334</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
