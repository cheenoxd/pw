import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook
import "../css/About.css";

export default function About() {
  const controls = useAnimation(); 
  const { ref, inView } = useInView({
    threshold: 0.5, 
  });

  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 }); 
    } else {
      controls.start({ opacity: 0, x: -100 }); 
    }
  }, [controls, inView]);

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, x: -100 }} 
          animate={controls} 
          transition={{ duration: 1, delay: 0.3 }} 
      >
        About Me
      </motion.h2>

      <div className="about-paragraph">
        <motion.p
          initial={{ opacity: 0, x: -75 }} 
          animate={controls} 
          transition={{ duration: 1, delay: 0.3 }} 
        >
          Hello! I'm Zesan Rahim, a passionate Software Developer based out of
          Hamilton, Ontario, Canada. I love building a variety of different
          projects ranging from web applications and interactive user interfaces
          to full stack projects as well as innovative software solutions. I'm
          always excited to explore new technologies, experiment with creative ideas,
          and solve real-world problems through coding and development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -100 }} 
          animate={controls} 
          transition={{ duration: 1, delay: 0.3 }} 
        >
          I am currently a Computer Science student at Carleton University
          focused on Machine Learning and Artificial Intelligence. I am part of
          the Carleton AI Society and Carleton Blueprint. Outside of school, I like
          to immerse myself in extra-curriculars, video games, and exploring.
        </motion.p>
      </div>
    </section>
  );
}
