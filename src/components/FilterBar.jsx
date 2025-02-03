import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const FilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const filters = {
    year: {
      name: 'Release Year',
      options: ['2025', '2024', '2023', '2022', '2021', '2020', 'Before 2020']
    },
    rating: {
      name: 'Rating',
      options: ['4+ Stars', '3+ Stars', '2+ Stars', 'All Ratings']
    },
    genre: {
      name: 'Genre',
      options: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller']
    }
  };

  const handleFilterClick = (filterKey) => {
    setActiveFilter(activeFilter === filterKey ? null : filterKey);
  };

  const handleOptionSelect = (filterKey, option) => {
    onFilterChange(filterKey, option);
    setActiveFilter(null);
  };

  return (
    <div className="w-full p-4 rounded-lg mb-6">
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, filter]) => (
          <div key={key} className="relative">
            <button
              onClick={() => handleFilterClick(key)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
            >
              {filter.name}
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${
                  activeFilter === key ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {activeFilter === key && (
              <div className="absolute z-10 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(key, option)}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors"
                  >
                    {key === 'rating' && (
                      <span className="flex items-center gap-1">
                        {option}
                        {option.includes('+') && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                      </span>
                    )}
                    {key !== 'rating' && option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;