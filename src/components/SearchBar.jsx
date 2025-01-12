import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './SearchBar.module.css'; // Optional for scoped styles

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);  // Trigger search as user types
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,  // Function to handle search input
};

export default SearchBar;
