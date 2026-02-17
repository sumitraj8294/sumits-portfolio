import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

import purestateLogo from '../assets/purestate.png';
import cheggLogo from '../assets/chegg.png';
import buckLogo from '../assets/buck.png';

const experienceList = [
  // {
  //   role: 'Associate Software Engineer',
  //   company: 'PureState',
  //   duration: 'July 2025 – Dec 2025',
  //   logo: purestateLogo,
  //   points: [
  //     'Developing full-stack web applications for agri-based platforms.',
  //     'Implemented secure user authentication and real-time location search.',
  //     'Integrated MongoDB, Vercel, and deployment pipelines.',
  //   ],
  // },
  {
    role: 'Software Developer Intern',
    company: 'PureState',
    duration: 'July 2025 – Dec 2025',
    logo: purestateLogo,
    points: [
      'Developing full-stack web applications for agri-based platforms.',
      'Implemented secure user authentication and real-time location search.',
      'Integrated MongoDB, Vercel, and deployment pipelines.',
    ],
  },
  {
    role: 'Subject Matter Expert - Computer Science',
    company: 'Chegg India',
    duration: 'Aug 2023 – Aug 2024',
    logo: cheggLogo,
    points: [
      'Solved 500+ student queries with high accuracy and academic standards.',
      'Covered DBMS, DSA, OS, CN, and OOPs topics.',
      'Delivered concept-driven solutions with clarity and timeliness.',
    ],
  },
  {
    role: 'Web Designing Intern',
    company: 'Buck Softech Pvt. Ltd.',
    duration: 'May 2023 – Jul 2023',
    logo: buckLogo,
    points: [
      'Designed responsive websites using HTML, CSS, and JavaScript.',
      'Built modern UI/UX layouts focused on accessibility and performance.',
      'Collaborated closely with developers to meet deadlines and quality goals.',
    ],
  },
];

const Experience = () => (
  <section className="experience-section" id="experience">
    <h2 className="experience-role-title">Software Developer</h2>
    <h3 className="section-title">Experience</h3>
    <div className="timeline-track">
      {experienceList.map((exp, idx) => (
        <motion.div
          className="timeline-item"
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="timeline-header">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                />
              )}
              <div>
                <h3>{exp.role}</h3>
                <p className="company">
                  {exp.company} • {exp.duration}
                </p>
              </div>
            </div>
            <ul>
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
