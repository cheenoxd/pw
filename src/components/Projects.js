import React from 'react';
import ProjectCard from './ProjectCard';
import a from "../assets/a.png"
import InfiniteScroll from "react-infinite-scroll-component";
import '../css/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "Personal Website | React, CSS",
      image: a,
      link: "https://en.wikipedia.org/wiki/Memorials_to_George_Floyd",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      image: "https://example.com/portfolio.png",
      link: "https://username.github.io/portfolio",
    },
    {
      title: "Todo List App",
      description: "A simple and efficient Todo List App.",
      image: "https://example.com/todo-app.png",
      link: "https://github.com/username/todo-app",
    },
  ];

  return (
    <div className="projects-container">
       <h2>Projects</h2>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
