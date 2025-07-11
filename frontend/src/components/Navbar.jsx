import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Sumit Raj</div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#Home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
