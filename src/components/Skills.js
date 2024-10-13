import React from 'react';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
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
    { id: 'javascript', name: 'JAVASCRIPT', icon: javascriptIcon},
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
  return (
    <motion.div className="container">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <ReactSVG src={skill.icon} />
          <p>{skill.name}</p>
        </div>
      ))}
    </motion.div>
  );
}
