import React from 'react';
import ProjectCard from './ProjectCard';
import a from "../assets/a.png"

const Projects = () => {
  const projectData = [
    {
      title: "Weather App",
      description: "A web app to get real-time weather updates. react",
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
