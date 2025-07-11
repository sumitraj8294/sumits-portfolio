// Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sumit Raj. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
