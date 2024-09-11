import profileData from "./ProfileData";

const Jumbotron = () => {
  const containerStyle = {
    backgroundImage:
      "linear-gradient(rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh", // Adjust height to your needs
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const contentStyle = {
    backdropFilter: "blur(6px) saturate(102%)",
    WebkitBackdropFilter: "blur(6px) saturate(102%)",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
    textAlign: "left",
  };

  return (
    <div className="container-fluid d-flex " style={containerStyle}>
      <div
        className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12"
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
          <a className="btn btn-dark" href="#" role="button">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
