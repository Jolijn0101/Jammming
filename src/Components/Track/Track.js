import React, { useState } from 'react';
import './Track.css';

function Track({ track, addTrack, removeTrack }) {
  function onAdd(track) {
    addTrack(track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{`${track.artist} | ${track.album}`}</p>
      </div>
      <button className="Track-action" onClick={() => onAdd(track)}>
        +
      </button>
    </div>
  );
}

export default Track;
