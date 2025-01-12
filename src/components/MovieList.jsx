import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onRemoveFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard

        key={movie.imdbID}
            data={movie}
            onRemoveFavorite={onRemoveFavorite}
        //   title={movie.Title}
        //   posterPath={movie.Poster}
        //   releaseYear= {movie.Year}
        //   favorite={movie}
        />
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
