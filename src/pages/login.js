import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';


function Login() {

  // state variables for main login (usrn , paswrd, and error msg)
  const [username, setUsername] = useState(''); // used in buttons
  const [password, setPassword] = useState(''); // used in buttons
  const [error, setError] = useState(''); // used in handleLogin funciton
  const navigate = useNavigate(); // used in if statment for 200 status



  // Set the base URL for the API
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5004';


  // constant for handling login functions
    // async allows constant to handle functions that take time (for this, an API call)
      // pair it with await so can only move to next line of code until API call is complete
      // e is the event object for an event handler, represents event that occured
  const handleLogin = async (e) => {
    console.log(username, password) // log in console to make sure data is coming back from backend
    try {
      e.preventDefault() // make it so that page doesn't refresh after login so error msg can stay
      // Send login request
      const response = await axios.post(
        `${API_BASE_URL}/user-login`,
        { username, password }, // data sent in the POST request w/ 'username' and 'password' properties. will be sent as JSON and must match w/ backend request
        { withCredentials: true } // Keep session active by allowing cookies
      );

      if (response.status === 200) {
        navigate('/dashboard'); // Redirect to dashboard on successful login
        console.log('Login successful:', response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password.');
      }
    }
  };



  return (
    <div className="container">
      <div className="big-rectangle">
        <h1 className="login-header">Login</h1>
        <p className="welcome-back-text">Welcome back!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            id = "username"
            autoComplete = "username"
            className="username-box"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id = "password"
            autoComplete = "current-password"
            className="password-box"
          />
          <button type="submit" className="login-submit">
            Login
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login