import profileData from "./ProfileData";

const Resume = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const bioStyle = {
    flex: "1",
    padding: "20px",
    textAlign: "left",
  };

  const photoStyle = {
    flex: "0 0 200px", // Width for the photo
    textAlign: "center",
  };

  const lowerSectionStyle = {
    marginTop: "40px",
  };

  return (
    <div className="container">
      {/* Upper Section: Photo and Bio */}
      <div style={containerStyle}>
        <div style={bioStyle}>
          <h2>{profileData.name}</h2>
          <p>
            <strong>Email:</strong> {profileData.email}
            <br />
            <strong>Phone:</strong>
            <br />
            <strong>Address:</strong>
          </p>
          <p>
            <strong>Profile:</strong> <br />
            {profileData.bio}
          </p>
        </div>
        <div style={photoStyle}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>

      {/* Lower Section: Tables and Additional Info */}
      <div style={lowerSectionStyle}>
        <h3>Work Experience</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Duration</th>
              <th>Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC Corp</td>
              <td>Senior Developer</td>
              <td>2019 - Present</td>
              <td>
                Lead web development team, manage project lifecycles, and mentor
                junior developers.
              </td>
            </tr>
            <tr>
              <td>XYZ Inc</td>
              <td>Software Engineer</td>
              <td>2016 - 2019</td>
              <td>
                Developed web applications, optimized databases, and improved
                UI/UX designs.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Education</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Institution</th>
              <th>Degree</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University of Springfield</td>
              <td>Bachelor of Science in Computer Science</td>
              <td>2012 - 2016</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resume;
