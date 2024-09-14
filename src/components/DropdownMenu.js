import React from "react";
import { Link } from 'react-router-dom';


const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/about.js"> About Me</Link></li>
        <li><Link to="/Projects.js"> Projects</Link></li>
        <li><Link to="/resume.js"> Resume</Link></li>
        <li><Link to="/contact.js"> Contact Me</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
