import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { helix } from 'ldrs';
import '../css/Navbar.css';

helix.register();

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Add the event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define closeMenu function
  const closeMenu = () => {
    if (isMobile) {

    }
  };

  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="helix-container">
        <l-helix size="45" speed="2.5" color="white" />
      </div>
    </div>
    <nav>
      <Link to="#" smooth className="nav-link">home</Link>
      <Link to="#about" smooth className="nav-link">about</Link>
      <Link to="#projects" smooth className="nav-link">projects</Link>
      <Link to="#skills" smooth className="nav-link">skills</Link>
      <Link to="#contact" smooth className="nav-link">contact</Link>
    </nav>
  </div>

);
}
