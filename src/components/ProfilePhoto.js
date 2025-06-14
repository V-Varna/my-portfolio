import React from 'react';

const ProfilePhoto = () => (
  <div className="profile-photo-square">
    <img
      src={require('../assets/profile.jpg')}
      alt="Profile"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
    />
  </div>
);

export default ProfilePhoto;
