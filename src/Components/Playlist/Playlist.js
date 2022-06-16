import React from 'react';
import './Playlist.css';

function Playlist({
  playlistName,
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
}) {
  function handleNameChange(e) {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      {playlistTracks.map((track) => {
        return (
          <div className="Track" key={track.id}>
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{`${track.artist} | ${track.album}`}</p>
            </div>
            <button className="Track-action" onClick={() => onRemove(track)}>
              -
            </button>
          </div>
        );
      })}
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
