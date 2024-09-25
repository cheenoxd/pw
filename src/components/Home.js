import { motion } from "framer-motion";
import React from 'react';
import '../css/Home.css';
import { helix } from 'ldrs'



export default function Home () {
const text = "Zesan Rahim".split(" ");
 
  return (
    <div className="underline">
    <div id = "home">

      <header>

      </header>
      
      <div id="about-me" style={{ marginTop: '100vh' }}>
        <h2>About me</h2>
        <p>
           Hello! I'm Zesan Rahim, a passionate Software Developer
           based out of Hamilton, Ontario, Canada. I love building a variety of 
           different projects ranging from web applications
           and interactive user interfaces to full stack projects as well
           as innovative software solutions.
        </p>
        <p>
          I'm always excited to explore new technologies,
          experiment with creative ideas, and solve real-world problems 
          through coding and development.
        </p>
        <p>
          I currently am a Computer Science student at Carleton University
          focused on Machine Learning and Artificial Intelligence.
          Outside of school, I like to immerse myself in extra-curriculars,
          video games, and exploring. 
        </p>
      </div>
    </div>
    </div>

    
  
  );
}

