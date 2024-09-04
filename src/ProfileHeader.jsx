/* eslint-disable react/prop-types */
// src/ProfileHeader.jsx

const ProfileHeader = ({ name, age, profileImage }) => {
  return (
    <div className="profile-header">
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="profile-image"
      />
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default ProfileHeader;
