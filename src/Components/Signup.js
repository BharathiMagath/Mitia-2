import React, { useState } from 'react';
import '../Styles/Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    // Add sign-up logic here (e.g., API call)
  };
  const navigate = useNavigate();

  const gotohomepage = () => {
  navigate('/HomePage');
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={gotohomepage}>Sign Up </button>
      </form>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE4r32o07sN-cGvaIrxl3SfBzBaOPNU3efA&s"
          alt="HI"
          className="corner-gif"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/658/941/original/old-people-elderly-woman-grandmother-mature-person-cartoon-character-vector.jpg"
          alt="HI"
          className="corner-gif"
        />
      </div>
    </div>
  );
};

export default Signup;
