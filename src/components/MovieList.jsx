import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


const MovieList = ({ movies, onRemoveFavorite }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie} onRemoveFavorite={onRemoveFavorite} />
        ))}
      </div>
    );
  };

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       poster_path: PropTypes.string,
//       release_date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default MovieList;
