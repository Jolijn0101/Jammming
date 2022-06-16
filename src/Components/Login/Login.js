import React from 'react';
import './Login.css';
import Spotify from '../../util/Spotify';

function Login() {
  function toggleLogin() {
    Spotify.handleLogin();
  }

  return (
    <div id="login">
      <h2>Welcome by Jamming</h2>
      <p>The web-app that makes the creation of spotify playlists easy!</p>
      <p>Login for making a new playlist.</p>
      <button onClick={toggleLogin}>Login to Spotify</button>
    </div>
  );
}

export default Login;
