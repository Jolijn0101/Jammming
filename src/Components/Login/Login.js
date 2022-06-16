import React from 'react';
import './Login.css';
import Spotify from '../../util/Spotify';

function Login() {
  function toggleLogin() {
    Spotify.handleLogin();
  }

  return (
    <div id="login">
      <h1>
        Welcome by Ja<span className="highlight">mmm</span>ing
      </h1>
      <p>The web-app that makes the creation of spotify playlists easy!</p>
      <p>Login for making a new playlist.</p>
      <button onClick={toggleLogin}>Login to Spotify</button>
    </div>
  );
}

export default Login;
