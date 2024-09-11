import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, age, location, image }) => {
  return (
    <div className="profile-container">
      <img src={image} alt={`${name}'s portrait`} className="profile-image" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserProfile;
