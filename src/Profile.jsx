// src/Profile.jsx

import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import profileData from "./ProfileData";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader
        name={profileData.name}
        age={profileData.age}
        profileImage={profileData.profileImage}
      />
      <ProfileDetails
        email={profileData.email}
        bio={profileData.bio}
        address={profileData.address}
      />
      <button> Press it</button>
    </div>
  );
};

export default Profile;
