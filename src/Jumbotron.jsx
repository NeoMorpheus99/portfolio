import profileData from "./ProfileData";
import Navbar from "./component/Nav";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  const containerStyle = {
    backgroundImage:
      "linear-gradient(rgba(12, 76, 138, 0.3), rgba(151, 213, 224, 0.3)), url('/portfolio/pro2.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh", // Adjust height to your needs
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative", // Added to allow absolute positioning
  };

  const contentStyle = {
    backdropFilter: "blur(6px) saturate(102%)",
    WebkitBackdropFilter: "blur(6px) saturate(102%)",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
    textAlign: "left",
  };

  const navbarStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 1, // Ensure the navbar stays on top
  };

  return (
    <div className="container-fluid d-flex " style={containerStyle}>
      {/* Position the Navbar at the top-right */}
      <div style={navbarStyle}>
        <Navbar />
      </div>
      <div
        className="p-5 mb-4 lc-block col-xxl-6 col-lg-6 col-6"
        style={contentStyle}
      >
        <div className="lc-block">
          <div contentEditable="true">
            <h2 className="fw-bolder display-3">{profileData.name}</h2>
          </div>
        </div>
        <div className="lc-block col-md-8">
          <div contentEditable="true">
            <p className="lead">{profileData.bio}</p>
          </div>
        </div>
        <div className="lc-block">
          <Link to="/resume" className="btn btn-info">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
