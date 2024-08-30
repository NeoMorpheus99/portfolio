// src/ProfileDetails.jsx

const ProfileDetails = ({ email, bio, address }) => {
  return (
    <div className="profile-details">
      <p>
        <strong>Email address: </strong> {email}
      </p>
      <p>
        <strong>Bio: </strong> {bio}
      </p>
      <p>
        <strong>Address:</strong> {address.street}, {address.city},{" "}
        {address.state} {address.zip}
      </p>
    </div>
  );
};

export default ProfileDetails;
