import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/Navbar.css';
import { helix } from 'ldrs';

// Register helix
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
      // Add logic here to close the menu if needed
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
        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
          About Me
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
