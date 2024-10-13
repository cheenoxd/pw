import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Keep Router for main structure
import Navbar from './components/Navbar'; // Your Navbar component
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Home from './components/Home';
import BlobBackground from './components/Background'; // Background component

const SectionWrapper = ({ id, children }) => (
  <section id={id} style={{ padding: '100px 0' }}> {/* Adjust padding if needed */}
    {children}
  </section>
);

export default function App() {
  return (
    <Router> {/* Keep Router for overall navigation */}
      <div>
        {/* Background Component */}
       <BlobBackground/>

        {/* Navbar Component */}
        <Navbar />

        {/* Wrap sections with IDs for smooth scrolling */}
        <SectionWrapper id="home">
          <Home />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>

        <SectionWrapper id="resume">
        
        </SectionWrapper>
      </div>
    </Router>
  );
}
