import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.module.css'; // Optional for scoped styles
import FavoriteButton from './FavoriteButton';

// const MovieCard = ({ title, posterPath, releaseYear }) => {
const MovieCard = ({ data, onRemoveFavorite }) => {
    const handleRemove = () => {
        if (onRemoveFavorite) onRemoveFavorite(data.imdbID);
      };
    
    // console.log(data);
  const posterUrl = data.Poster
    ? data.Poster
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={data.title} className="movie-poster" />
      <div className="movie-details">
        <h3 className="movie-title">{data.title}</h3>
        <p className="movie-year">{data.releaseYear}</p>
        {!onRemoveFavorite && (<FavoriteButton movie={data} />)}
        {onRemoveFavorite && (
        <button onClick={handleRemove}>Remove from Favorites</button>
      )}

      </div>
    </div>
  );
};

// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   posterPath: PropTypes.string,
//   releaseYear: PropTypes.string.isRequired,
// };

export default MovieCard;
