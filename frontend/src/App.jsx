import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills/>
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
