import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import '../css/Home.css';  // Existing Home styles
import '../css/TrianglesAnimation.css';  // New CSS for the animated triangles
import { helix } from 'ldrs';

helix.register();

export default function Home() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const total = 30;  // Number of triangles to generate

    // Generate 30 triangles dynamically
    for (let i = 0; i < total; i++) {
      const tri = document.createElement('div');
      tri.classList.add('tri');

      // Assign unique random positions to spread out the triangles across the screen
      const randomTop = Math.random() * 100;  // Random value between 0% and 100% for viewport height
      const randomLeft = Math.random() * 100; // Random value between 0% and 100% for viewport width
      tri.style.top = `${randomTop}%`;
      tri.style.left = `${randomLeft}%`;

      // Assign random animation delay to each triangle for dynamic effect
      const randomDelay = Math.random() * 5; // Random delay between 0s and 5s
      tri.style.animationDelay = `${randomDelay}s`;

      // Append the triangle to the wrap container
      wrap.appendChild(tri);
    }
  }, []);

  return (
    <div className="home-container">
      <div className="wrap" ref={wrapRef}></div>
      <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      
      </motion.div>
    </div>
  );
}
