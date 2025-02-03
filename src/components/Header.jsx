import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { HomeIcon, Heart, Menu, X } from 'lucide-react';

const Header = ({ showSearch = true, onSearch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-gray-900/95 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Desktop Navigation */}
                    <div className="flex items-center space-x-8">
                        <h1 className="text-2xl font-bold text-red-600">AP Movies</h1>
                        {/* Desktop Menu */}
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

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="sm:hidden p-2 text-gray-300 hover:text-white"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden mt-4 py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-4">
                            <a 
                                href="/" 
                                className="text-gray-300 hover:text-white flex items-center gap-2 px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <HomeIcon className="w-4 h-4" />
                                <span>Home</span>
                            </a>
                            <a 
                                href="/favorites" 
                                className="text-gray-300 hover:text-white flex items-center gap-2 px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Heart className="w-4 h-4" />
                                <span>Favorites</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;