import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

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
      <h1>Your Favorite Movies</h1>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} onRemoveFavorite={removeFavorite} />
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
