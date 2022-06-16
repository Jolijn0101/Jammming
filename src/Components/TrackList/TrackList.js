import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList({ searchResults, addTrack, removeTrack }) {
  return (
    <div className="TrackList">
      {searchResults.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            addTrack={addTrack}
            removeTrack={removeTrack}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
