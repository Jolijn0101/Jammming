import React, { useState, useEffect } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';
import Login from '../Login/Login';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = Spotify.getTokenFromUrl();
    window.location.hash = '';
    setToken(hash.access_token);
  }, []);

  function addTrack(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  }
  function removeTrack(track) {
    const newPlaylist = playlistTracks.filter((item) => item.id !== track.id);
    setPlaylistTracks(newPlaylist);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris, token).then(() => {
      setPlaylistTracks([]);
      setPlaylistName('New Playlist');
    });
  }

  function search(term) {
    Spotify.search(term, token).then((searchResults) => {
      setSearchResults(searchResults);
    });
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      {token && (
        <div id="button-box">
          <button id="logout-btn" onClick={() => setToken('')}>
            Logout
          </button>
        </div>
      )}

      {token ? (
        <div className="App">
          <SearchBar onSearch={search} />
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack} removeTrack={removeTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onNameChange={updatePlaylistName}
              onSave={savePlaylist}
            />
          </div>
        </div>
      ) : (
        <div className="App">
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
