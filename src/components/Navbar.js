import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>


    <div style={{ backgroundColor: 'transparent', padding: '10px' }}
     
    >
      {/* Hamburger Icon */}
      
      <motion.div
        className="hamburger"
        onClick={toggleMenu}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
    {/* Top Bar */}
        <motion.div
          className="bar"
          style={{ backgroundColor: 'black', height: '3px', 
          marginBottom: '5px', width: '30px' }} 
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 10 },
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Middle Bar */}
        <motion.div
          className="bar"
          style={{ backgroundColor: 'black', height: '3px', marginBottom: '5px', width: '30px' }} 
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Bottom Bar */}
        <motion.div
          className="bar"
          style={{ backgroundColor: 'black', height: '3px', width: '30px' }} 
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -10 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Dropdown Menu */}
      {isOpen && <div className="overlay"></div>}

      <motion.div  
        className="menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 0, height: 0 },
          open: { opacity: 1, height: "auto" },
        }}
        transition={{ duration: 0.5  }}
        style={{ backgroundColor: 'transparent', padding: '10px', 
        overflow: 'hidden' }} 
      >
        <ul>
          <li><Link to="/about" className="link"> About Me</Link></li>
          <li><Link to="/Projects" className="link"> Projects</Link></li>
          <li><Link to="/Resume" className="link"> Resume</Link></li>
          <li><Link to="/Contact" className="link"> Contact Me</Link></li>
        </ul>
      </motion.div>
    </div>
    </div>
    
   );
}
