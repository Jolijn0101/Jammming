import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults({ searchResults, addTrack, removeTrack }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        searchResults={searchResults}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
}

export default SearchResults;
