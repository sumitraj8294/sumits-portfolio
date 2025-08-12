import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';
import profileImg from '../assets/portfolio-profile.jpg';
import heroVideo from '../assets/hero-bg.mp4'; 

const Hero = () => {
  return (
    <section className="hero-container" id="Home">
  {/* Video background */}
  {/* <video className="hero-video-bg" autoPlay loop muted playsInline>
    <source src={heroVideo} type="video/mp4" />
  </video> */}

  {/* 🔳 Transparent dark layer */}
  <div className="video-overlay" />

  {/* Foreground content */}
  <div className="hero-overlay">
    <div className="hero-profile">
      <img src={profileImg} alt="Sumit Raj" />
    </div>

    <motion.h1
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hero-title"
    >
      Hi, I'm <span className="highlight">Sumit Raj</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="hero-subtitle"
    >
      Full Stack Developer • DB Integration • Deployment Specialist
    </motion.p>
  </div>
</section>

  );
};

export default Hero;
