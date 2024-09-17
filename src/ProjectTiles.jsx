import ProjectData from "./component/ProjectData.jsx";

const ProjectCard = () => {
  return (
    <>
      {ProjectData.slice(0, 3).map((item, index) => (
        <div key={index} className="project-card">
          <div className="project-card__image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
