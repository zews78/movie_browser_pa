import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.module.css'; // Optional for scoped styles
// import styles from '../styles/FavoriteButton.module.css';
import { Heart } from 'lucide-react';

const FavoriteButton = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.imdbID === movie.imdbID));
  }, [movie]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.imdbID !== movie.imdbID);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

//   return (
//     <button onClick={toggleFavorite} className={`favorite-button ${isFavorite ? 'active' : ''}`}>
//       {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//     </button>
//   );
return (
    <button
      onClick={toggleFavorite}
      className="p-2 rounded-full hover:bg-black/20 transition-colors group/btn"
      aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <Heart
        className={`w-6 h-6 transition-all duration-300 ${
          isFavorite 
            ? 'text-red-500 fill-red-500 scale-110' 
            : 'text-white group-hover/btn:scale-110'
        }`}
      />
    </button>
  );
};

// FavoriteButton.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     poster_path: PropTypes.string,
//     release_date: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FavoriteButton;
