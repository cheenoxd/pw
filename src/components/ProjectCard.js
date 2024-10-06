import React from 'react';
import '../css/ProjectCard.css'; 

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className='container'>
     <div className="project-card">
       <img src={image} alt={`${title} screenshot`} className="project-image" />
       <div className="project-content">
         <h3 className="project-title">{title}</h3>
         <p className="project-description">{description}</p>
         <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
         </a>
       </div>
     </div>
    </div>
  );
};

export default ProjectCard;