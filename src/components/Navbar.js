import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        <h1></h1>
      </div>
      <nav>
        <a href='/#'>About Me</a>
        <a href='/#'>Projects</a>
        <a href='/#'>Resume</a>
        <a href='/#'>Contact</a>
      </nav>
    </div>
  );
}
