import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Profile.css'; // Add your CSS styling

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure the state passed from the Login component
  const { username, password } = location.state || { username: '', password: '' };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-details">
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Password:</strong> {password}</p>
      </div>
      <button className="back-button" onClick={() => navigate('/login')}>
        Back to Login
      </button>
    </div>
  );
};

export default Profile;
