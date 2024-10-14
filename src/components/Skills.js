import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Skills.css';
import javascriptIcon from "../assets/javascript.svg";
import cssIcon from "../assets/css.svg";
import cppIcon from "../assets/cpp.svg";
import cIcon from "../assets/c.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import postgresIcon from "../assets/postgres.svg";
import gitIcon from "../assets/git.svg";
import djangoIcon from "../assets/django.svg";
import tensorflowIcon from "../assets/tensorflow.svg";

const skills = [
  { id: 'javascript', name: 'JAVASCRIPT', icon: javascriptIcon },
  { id: 'css', name: 'CSS', icon: cssIcon },
  { id: 'cpp', name: 'C++', icon: cppIcon },
  { id: 'c', name: 'C', icon: cIcon },
  { id: 'python', name: 'PYTHON', icon: pythonIcon },
  { id: 'react', name: 'REACT', icon: reactIcon },
  { id: 'postgres', name: 'POSTGRES', icon: postgresIcon },
  { id: 'git', name: 'GIT', icon: gitIcon },
  { id: 'django', name: 'DJANGO', icon: djangoIcon },
  { id: 'tensorflow', name: 'TENSORFLOW', icon: tensorflowIcon },
];

export default function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -75 });
    }
  }, [controls, inView]);

  return (
    <div className="skills-section">
      <motion.h2
        ref={ref}
        className="skills-title"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <motion.div
        ref={ref}
        className="container"
        initial={{ opacity: 0, y: -75 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <ReactSVG src={skill.icon} />
            <p>{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
