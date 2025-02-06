import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { Film } from 'lucide-react';
import SEO from '../components/SEO';


const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteMovies(favorites);
    }, []);

    const removeFavorite = (movieId) => {
        const updatedFavorites = favoriteMovies.filter(movie => movie.imdbID !== movieId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteMovies(updatedFavorites);
    };

    return (
        <div>
            <SEO
                title="Favorites Page"
                description="Browse your favorite saved movies and manage your personal collection on the Favorites Page."
            />
            <div className="min-h-screen bg-gray-900">
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Your Favorite Movies</h2>

                    {favoriteMovies.length > 0 ? (
                        <MovieList movies={favoriteMovies} onRemoveFavorite={removeFavorite} />
                    ) : (
                        <div className="text-center py-16">
                            <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg">No favorite movies added yet.</p>
                            <a
                                href="/"
                                className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                            >
                                Browse Movies
                            </a>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Favorites;
