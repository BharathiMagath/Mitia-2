import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const goToSignup = () => {
    navigate('/signup');
  };
  const gotohome = () => {
    navigate('/HomePage');
  };


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <a href="/forgot-password" className="forgot-password">
          Forgot password?
        </a>
        <button type="submit" onClick={gotohome}>Login</button>

        <button type="button" className="signup-button" onClick={goToSignup}>
          Sign Up
        </button>
      </form>

      {/* Image container for the GIFs */}
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

export default Login;
