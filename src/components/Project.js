import React from "react";

const Project = ({ project, onClick }) => {
    const handleClick = (event) => {
        onClick (project.detailImages);
    };
  return (
          <div key={project.id} className="project">
            <div className="image">
                <img onClick={ handleClick } src={project.imageSrc} alt={project.title}></img>
            </div>
            <div className="title">{project.title}</div>
          </div>
  );
};

export default Project;
