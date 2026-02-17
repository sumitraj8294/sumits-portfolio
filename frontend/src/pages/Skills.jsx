// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaMobileAlt,
  FaAws,
  FaDocker
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiPostgresql,
  // FaMicrosoft
} from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 className="icon html" /> },
    { name: 'CSS', icon: <FaCss3Alt className="icon css" /> },
    { name: 'JavaScript', icon: <FaJs className="icon js" /> },
    { name: 'React', icon: <FaReact className="icon react" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="icon tailwind" /> },
  ],

  mobile: [
    { name: 'React Native', icon: <SiReact className="icon react" /> },
    { name: 'Expo', icon: <FaMobileAlt className="icon mobile" /> },
    { name: 'Firebase', icon: <SiFirebase className="icon firebase" /> },
  ],

  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="icon node" /> },
    { name: 'Express', icon: <SiExpress className="icon express" /> },
    { name: 'MongoDB', icon: <SiMongodb className="icon mongo" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="icon postgres" /> },
    { name: 'Python', icon: <FaPython className="icon python" /> },
  ],

//   powerplatform: [
//     { name: 'Power Apps', icon: <FaMicrosoft className="icon powerapps" /> },
// { name: 'Power Automate', icon: <FaMicrosoft className="icon powerauto" /> },
// { name: 'Dataverse', icon: <FaMicrosoft className="icon dataverse" /> },

//   ],

  devops: [
    { name: 'Git', icon: <FaGitAlt className="icon git" /> },
    { name: 'Postman', icon: <SiPostman className="icon postman" /> },
    { name: 'Vercel', icon: <SiVercel className="icon vercel" /> },
    { name: 'Docker', icon: <FaDocker className="icon docker" /> },
    { name: 'AWS (Basics)', icon: <FaAws className="icon aws" /> },
  ]
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            className="skills-category"
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul>
              {items.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
