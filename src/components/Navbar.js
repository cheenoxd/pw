import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../css/Navbar.css';
import Sidebar from './Sidebar';
import { helix } from 'ldrs';
helix.register();

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="helix-container">
          <l-helix size="45" speed="2.5" color="white" />
        </div>
      </div>
      <nav>
        <Link to="about" smooth={true} duration={500}>About Me</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="resume" smooth={true} duration={500}>Resume</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </div>
  );
}
