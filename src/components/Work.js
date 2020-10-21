import React from "react";
import Project from "./Project";
import { useState } from "react";

const Work = ({ projects }) => {
  const [detailImages, setDetailImages] = useState ([ ])
  const handleProjectClick = (detailImages) => {
  setDetailImages (detailImages) 
  }


  return (
    <div className="work_container">
      <h1>Projects.</h1>
      <div className="projects_container">
        {projects.map(project => (
         <Project project= {project} onClick= {handleProjectClick} />
        ))}
      </div>
      {detailImages.length >0 &&
      <div className="projects_detail_container">
        <img src= {detailImages[0]} ></img>
        <img src= {detailImages[0]} ></img>
        <img src= {detailImages[0]} ></img>
      </div>
      }
    </div>
  );
};

export default Work;

