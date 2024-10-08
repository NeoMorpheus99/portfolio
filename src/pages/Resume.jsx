import Navbar from "../component/Nav";
import ProjectData from "../component/ProjectData";
import profileData from "../ProfileData";

const Resume = () => {
  return (
    <div className="container-fluid bg-theme-2 p-3">
      <Navbar />
      <br />
      <div className="row">
        {/* Left Column: Photo and Bio */}
        <div className="col-md-3 text-center blur_effect">
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="img-fluid rounded-circle mb-4"
            style={{ width: "250px", height: "265px" }}
          />
          <div
            className="p-3 bg-orange rounded shadow-sm text-start shadow"
            style={{ fontSize: "var(--text)" }}
          >
            <h2>{profileData.name}</h2>
            <p>
              <strong>Email:</strong> {profileData.email}
              <br />
              <strong>Phone:</strong> {profileData.phoneNo}
              <br />
              <strong>Address:</strong> {profileData.address.city}
              <br></br>
              <strong>Blog:</strong>{" "}
              <a href={profileData.website} target="_blank">
                Lepcha Blogs
              </a>
              <br />
            </p>
          </div>
          <div
            className="p-3 bg-orange rounded shadow-sm text-center mt-4"
            style={{ fontSize: "var(--text)" }}
          >
            <h4>About</h4>
            <hr />
            {profileData.about}
          </div>
          <div
            className="p-3 bg-orange rounded shadow-sm text-center mt-4"
            style={{ fontSize: "21px" }}
          >
            <h4>Social Links</h4>
            <hr />
            {profileData.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="mx-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "no-decoration", color: "black" }}
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Work Experience and Education */}
        <div className="col-md-9 mb-2">
          {/*EXperience*/}
          <div className="p-3 bg-white rounded shadow-sm mb-3">
            <h3>Professional Work Experience</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Duration</th>
                  <th>Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {profileData.experience.map((work, index) => (
                  <tr key={index}>
                    <td>{work.company}</td>
                    <td>{work.role}</td>
                    <td>{work.duration}</td>
                    <td>{work.resposibilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/*Projects*/}
          <div className="p-3 bg-white rounded shadow-sm mb-3">
            <h3>Projects</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Technologies used: </th>
                  <th>Summary</th>
                  <th>Source Code</th>
                </tr>
              </thead>
              <tbody>
                {ProjectData.AI_ML.map((work, index) => (
                  <tr key={index}>
                    <td>{work.name}</td>
                    <td>{work.algo}</td>
                    <td>{work.link}</td>
                    <td>{work.link}</td>
                  </tr>
                ))}
                {ProjectData.Others.map((work, index) => (
                  <tr key={index}>
                    <td>{work.title}</td>
                    <td>{work.tech}</td>
                    <td>{work.description}</td>
                    <td>{work.link}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* {Skills} */}
          <div className="row p-2">
            <div className="col p-3 bg-white rounded shadow-sm mb-3 mx-2">
              <h3>Hard Skills</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Skill</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.hardskills.map((skill, index) => (
                    <tr key={index}>
                      <td>{skill.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col p-3 bg-white rounded shadow-sm mb-3">
              <h3>Soft Skills</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.softskills.map((skill, index) => (
                    <tr key={index}>
                      <td>{skill.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/*Awards and Achievement*/}
          <div className="p-3 bg-white rounded shadow-sm mb-3">
            <h3>Awards and Achievements</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Awarded By</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {profileData.awards.map((award, index) => (
                  <tr key={index}>
                    <td>{award.title}</td>
                    <td>{award.awardedBy}</td>
                    <td>{award.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Education */}
          <div className="p-3 bg-white rounded shadow-sm mb-3">
            <h3>Education</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Study</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {profileData.schooling.map((school, index) => (
                  <tr key={index}>
                    <td>{school.name}</td>
                    <td>{school.Title}</td>
                    <td>{school.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
