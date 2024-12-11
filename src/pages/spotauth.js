import React, { useEffect } from 'react';
import axios from 'axios';


function SpotAuth() {

  // Set the base URL for the API
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5003';

  
  useEffect(() => {
    const fetchAuthUrl = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/spotify-login`);
        const authUrl = response.data.auth_url; // auth_url is the URL from the backend where user authenticates, was returned as a jsonify object in backend

        // Redirect to the Spotify authorization URL
        if (response.status === 200) {
          window.location.href = authUrl;
        }
      } catch (error) {
        console.error('Error fetching auth URL:', error);
      }
    };

    fetchAuthUrl();
  }, []);


  return (
    <div>
      <h3>Redirecting to Spotify for authentication...</h3>
      <p>If you are not redirected, <a href={`${API_BASE_URL}/spotify-login`}>click here</a>.</p>
    </div>
  );
}

export default SpotAuth;