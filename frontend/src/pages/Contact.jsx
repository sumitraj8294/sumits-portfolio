// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sumitraj.dev@gmail.com">sumitraj8294@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+919123456789">+91 8294939371</a>
        </div>

        <div className="contact-socials">
          <a href="https://github.com/sumitraj8294/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sumit-raj17/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/sumitraj8294/" target="_blank" rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;