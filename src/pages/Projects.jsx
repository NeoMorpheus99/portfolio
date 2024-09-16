import { useState } from "react";
import Navbar from "../component/Nav";

// Sample project data
const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "This is the description for Project One.",
    image: "logo.png",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the description for Project Two.",
    image: "logo.png",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the description for Project Three.",
    image: "logo.png",
  },
  // Add more projects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <Navbar />
      {/* Centered main image */}
      <div className="center-image">
        <img src="profile.jpg" alt="Profile" className="profile-img" />
      </div>

      {/* Surrounding project images */}
      <div className="project-grid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
          </div>
        ))}
      </div>

      {/* Modal to show project details when clicked */}
      {selectedProject && (
        <div className="project-details-modal">
          <div className="project-details-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={handleCloseDetails}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          position: relative;
        }

        .center-image {
          margin-bottom: 50px;
        }

        .profile-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 5px solid #fff;
          object-fit: cover;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .project-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .project-item {
          width: 150px;
          height: 150px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .project-item:hover {
          transform: scale(1.1);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .project-details-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-details-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          text-align: center;
        }

        .project-details-content h2 {
          margin-bottom: 20px;
        }

        .project-details-content button {
          padding: 10px 20px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
