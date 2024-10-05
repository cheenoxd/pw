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
      <a href="/">Home</a>
      <a href="#about">About Me</a>
      <a href='#projects'>Projects</a>
      <a href='#resume'>Skills</a>
      <a href='#contact'>Contact</a>
      </nav>
    </div>
  );
}
