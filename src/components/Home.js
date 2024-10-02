import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import '../css/Home.css';
import '../css/TrianglesAnimation.css';  // New CSS for the animated triangles
import { helix } from 'ldrs';

helix.register();

export default function Home() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const total = 50;  // Number of triangles to generate

    // Generate 30 triangles dynamically
    for (let i = 0; i < total; i++) {
      const tri = document.createElement('div');
      tri.classList.add('tri');

      
      const randomTop = Math.random() * 100; 
      const randomLeft = Math.random() * 100; 
      tri.style.top = `${randomTop}%`;
      tri.style.left = `${randomLeft}%`;

      
      const randomDelay = Math.random() * 5; 
      tri.style.animationDelay = `${randomDelay}s`;

    
      wrap.appendChild(tri);
    }
  }, []);

  return (
    <div className="home-container">
      <div className="wrap" ref={wrapRef}></div>
      <motion.div 
        className="content" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }}
      >
        {/* Animated text added here */}
        <motion.h1 
          className="animated-text" 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Zesan Rahim
        </motion.h1>
      </motion.div>
    </div>
  );
}
