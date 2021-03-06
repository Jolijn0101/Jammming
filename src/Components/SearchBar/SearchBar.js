import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  function search() {
    onSearch(term);
  }
  function handleTermChange(e) {
    setTerm(e.target.value);
  }
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
