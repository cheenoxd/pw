import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Sidebar from './Sidebar';


export default function Navbar() {
  return(
    <div className='navbar'>
      <Sidebar/>
      {/*sidebar */}
      <div className='wrapper'>
        <span>Zesan Rahim</span>

      </div>

    </div>
  )
}
 
