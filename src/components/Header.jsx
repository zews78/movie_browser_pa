import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import { HomeIcon, Heart } from 'lucide-react';


const Header = ({ showSearch = true, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        setIsInitialLoad(true);
      }
    return (
      <header className="bg-gray-900/95 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-red-600">AP Movies</h1>
              <div className="hidden sm:flex items-center space-x-6">
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                    tabIndex="1"
                    aria-label="Home"
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>Home</span>
                </a>
                <a 
                  href="/favorites" 
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                      tabIndex="2"
                    aria-label="Favorites"
                >
                  <Heart className="w-4 h-4" />
                  <span>Favorites</span>
                </a>
              </div>
            </div>
            {/* {showSearch && (
              <SearchBar onSearch={handleSearch} />
            )} */}
          </div>
        </nav>
      </header>
    );
  };
  
export default Header;