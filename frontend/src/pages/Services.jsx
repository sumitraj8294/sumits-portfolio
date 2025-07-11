import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDatabase, FaCloudUploadAlt } from 'react-icons/fa';
import '../styles/services.css';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance UIs using React, Vite, and Framer Motion.',
    icon: <FaReact className="service-icon" style={{ color: '#61dafb' }} />,
  },
  {
    title: 'Database Integration',
    description: 'MongoDB, PostgreSQL and Firebase integration for scalable and secure data handling.',
    icon: <FaDatabase className="service-icon" style={{ color: '#00b894' }} />,
  },
  {
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines, cloud deployment with Vercel, Netlify, and Docker-based hosting.',
    icon: <FaCloudUploadAlt className="service-icon" style={{ color: '#0984e3' }} />,
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">What I Offer</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
