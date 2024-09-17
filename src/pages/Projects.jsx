import ProjectData from "../component/ProjectData";
import Navbar from "../component/Nav";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div
        className="projects-container"
        data-toggle="tooltip"
        data-placement="left"
        data-delay="0"
        title="Click for more details"
      >
        {ProjectData.AI_ML.map((project, index) => (
          <div
            key={index}
            className={`polaroid ${
              index % 2 === 0 ? "rotate_left" : "rotate_right"
            }`}
            onClick={() => handleClick(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              width="284"
              height="213"
            />
            <p className="caption">{project.name}</p>
            <p className="description">{project.excerpt}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="image-modal" onClick={handleClose}>
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />

            <p className="modal-description">
              <strong>Type of Task: </strong>
              {selectedProject.type}
            </p>
            <p className="modal-description">
              <strong>Data Set: </strong> {selectedProject.dataset}
            </p>
            <p className="modal-description">
              <strong>Algorithms Used: </strong>
              {selectedProject.algo}
            </p>
            <p className="modal-description">
              <strong>Description: </strong>
              {selectedProject.desc}
            </p>
            <p className="modal-description">
              <strong>Challenges: </strong>
              {selectedProject.challenges}
            </p>
            <p className="modal-description">
              <strong>Resolution: </strong>
              {selectedProject.resolution}
            </p>
            <p className="modal-description">
              <strong>Outcome: </strong>
              {selectedProject.outcome}
            </p>
            <p className="modal-description">
              <strong>Report:</strong> {selectedProject.report}
            </p>
            <p className="modal-description">
              <strong>Source Code:</strong>{" "}
              <a
                href={selectedProject.gitrepo}
                target="_blank"
                className="anchor"
              >
                Lung Cancer Prediction Model
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
