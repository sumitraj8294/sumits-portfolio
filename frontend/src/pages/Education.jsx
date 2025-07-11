// Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/education.css';

import bhuLogo from '../assets/bhu.png';
import bscLogo from '../assets/ranchi.png';
import cpsLogo from '../assets/cps.png';

const educationList = [
  {
    degree: 'Master of Computer Application',
    institution: 'Banaras Hindu University (BHU)',
    duration: '2024 – 2026',
    logo: bhuLogo,
    highlights: [
      'Advanced coursework in Algorithms, Cloud Computing, and AI',
      'Specialization in Full-Stack Development and System Design'
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Application',
    institution: 'Ranchi University',
    duration: '2020 – 2023',
    logo: bscLogo,
    highlights: [
      'Core subjects: DBMS, OOPs, Networking, DSA',
      'Graduated with First Division honors'
    ]
  },
  {
    degree: 'Schooling-CBSE',
    institution: 'Chauhan Public School, Bhagalpur',
    duration: '2018 – 2020',
    logo: cpsLogo,
    highlights: [
      'Won state-level science quiz and coding competitions'
    ]
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationList.map((edu, idx) => (
          <motion.div
            className="education-card"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="edu-header">
              {edu.logo && (
                <img src={edu.logo} alt={`${edu.institution} logo`} className="edu-logo" />
              )}
              <div>
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="duration">{edu.duration}</p>
              </div>
            </div>
            <ul>
              {edu.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;