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
      <Link smooth to="/#home">Home</Link>
      <Link smooth to="/#about">About</Link>
      <Link smooth to="/#projects">Projects</Link>
      <Link smooth to="/#contact">Contact</Link>
    </nav>
    </div>
  );
}
