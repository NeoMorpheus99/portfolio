import profileData from "./ProfileData";
import Navbar from "./component/Nav";
import { Link } from "react-router-dom";
import "../styles/Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container-fluid d-flex containerStyle">
      {/* Position the Navbar at the top-right */}
      <div className="navbarStyle">
        <Navbar />
      </div>
      <div className="p-5 mb-4 lc-block col-xxl-6 col-lg-6 col-6 contentStyle">
        <div className="lc-block">
          <div contentEditable="true">
            <h2 className="fw-bolder display-3">{profileData.name}</h2>
          </div>
        </div>
        <div className="lc-block col-md-8">
          <div contentEditable="false">
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
