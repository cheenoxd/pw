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
    const total = 200;

    // Generate 200 triangles dynamically
    for (let i = 0; i < total; i++) {
      const tri = document.createElement('div');
      tri.classList.add('tri');
      wrap.appendChild(tri);
    }
  }, []);

  return (
    <div className="home-container">
      <div className="wrap" ref={wrapRef}></div>
      {/* Add other components or content for your Home page here */}
      <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      </motion.div>
    </div>
  );
}
