import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Sidebar from './Sidebar';
import { helix } from 'ldrs'
helix.register()


export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">

        <div className="helix-container">
          <l-helix size="45" speed="2.5" color="black" />
        </div>
        <span>Zesan Rahim</span>
      </div>
    </div>
  );
}
