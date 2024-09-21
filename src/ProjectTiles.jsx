import ProjectData from "./component/ProjectData.jsx";
import "../styles/ProjectCard.css"; // Assuming styles are in an external CSS file

const ProjectCard = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Latest Projects</h1>
      <div className="row mt-3">
        {ProjectData.AI_ML.slice(0, 3).map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card project-card h-100">
              <div className="project-card__image">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
