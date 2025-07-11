// Projects.jsx (with Lightbox, Buttons, Hover Effects)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/projects.css';

import voltxImg from '../assets/voltx.png';
import sihImg from '../assets/sih-project.png';
import touristImg from '../assets/tourist.png';
import weatherImg from '../assets/weather.png';

const projects = [
  {
    title: 'Voltx',
    description:
      'An EV charging locator with real-time search, user login, and Map integration.',
    tech: ['React', 'MongoDB', 'Node.js', 'Mapbox'],
    thumbnail: voltxImg,
    github: '#',
    live: '#',
  },
  {
    title: 'SIH Project – India Post',
    description:
      'Built for Smart India Hackathon. Logistics optimization system for India Post.',
    tech: ['Python', 'Flask', 'ML', 'Google Maps API'],
    thumbnail: sihImg,
    github: '#',
    live: '#',
  },
  {
    title: 'Tourist Info System',
    description:
      'Smart travel assistant offering nearby places and insights.',
    tech: ['HTML', 'CSS', 'JS', 'Google Places API'],
    thumbnail: touristImg,
    github: '#',
    live: '#',
  },
  {
    title: 'Weather App',
    description:
      'Weather forecasting with live city search using OpenWeatherMap API.',
    tech: ['React', 'API', 'Tailwind'],
    thumbnail: weatherImg,
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {project.thumbnail && (
              <div
                className="project-thumb"
                onClick={() => setLightboxImg(project.thumbnail)}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                />
              </div>
            )}
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="preview" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Projects;
