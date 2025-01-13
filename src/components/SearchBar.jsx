import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './SearchBar.module.css'; // Optional for scoped styles
import { Search } from 'lucide-react';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(e.target.search.value);
    };
  

  return (
    <form onSubmit={handleSubmit} className="relative">
    <input
      type="search"
      name="search"
      placeholder="Search movies..."
      className="w-64 px-4 py-2 pl-10 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
  </form>
  );
};

// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,  // Function to handle search input
// };

export default SearchBar;
