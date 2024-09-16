// Sample project data
import ProjectData from "../component/ProjectData";
import Navbar from "../component/Nav";
import { useState } from "react";

const Projects = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="projects-container">
        {ProjectData.AI_ML.map((project, index) => (
          <div
            key={index}
            className={`polaroid ${
              index % 2 === 0 ? "rotate_left" : "rotate_right"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              width="284"
              height="213"
            />
            <p className="caption">{project.name}</p>
            <p className="description">{project.excerpt}</p>
            <div className="btn btn-info">More deatisl</div>
          </div>
        ))}

        <style>{`
        body {
          margin: 30px;
          background-color: #E9E9E9;
        }

        .projects-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .polaroid {
          width: 284px;
          padding: 10px 10px 20px 10px;
          border: 1px solid #BFBFBF;
          background-color: white;
          box-shadow: 10px 10px 5px #aaaaaa;
          margin: 20px;
          transition: transform 0.3s ease, z-index 0.3s ease;
          position: relative; /* Make sure z-index works */
        }

        .rotate_right {
          float: left;
          transform: rotate(7deg);
        }

        .rotate_left {
          float: left;
          transform: rotate(-8deg);
        }

        .polaroid:hover {
          transform: scale(1.1) rotate(0); /* Removes tilt and zooms in */
          z-index: 2; /* Bring the hovered element forward */
          box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.3); /* Stronger shadow */
        }

        .caption {
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
        }
      `}</style>
      </div>
    </>
  );
};

export default Projects;
