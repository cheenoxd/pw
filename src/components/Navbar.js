import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { helix } from 'ldrs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import '../css/Navbar.css';

helix.register();

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    {
      id: 1,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zesanrahim/,',
      icon: <FaLinkedin size={25} />,
    },
    {
      id: 2,
      name: 'GitHub',
      href: 'https://github.com/cheenoxd',
      icon: <FaGithub size={25} />,
    },
    {
      id: 3,
      name: 'Resume',
      href: 'https://drive.google.com/file/d/1le062bv5yVDrKYchMyFB_hhcPtKl8ITE/view?usp=sharing',
      icon: <BsFillPersonLinesFill size={25} />,
    },
  ];

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
      <div className={`social-links ${isMobile ? 'hidden' : ''}`}>
        <ul>
          {links.map(({ id, name, href, icon }) => (
            <li key={id} className="social-link-item">
              <a href={href} target="_blank" rel="noreferrer" className="social-link">
                {name} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
