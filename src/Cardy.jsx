import profileData from "./ProfileData";

function Card() {
  return (
    <div className="card mt-2" style={{ width: "20rem" }}>
      <img src={profileData.profileImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{profileData.name}</h5>
        <p className="card-text">{profileData.bio}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
