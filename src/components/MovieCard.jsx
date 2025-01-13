import React from 'react';
import PropTypes from 'prop-types';
// import './MovieCard.module.css'; // Optional for scoped styles
import FavoriteButton from './FavoriteButton';
import { Heart } from 'lucide-react';

// const MovieCard = ({ title, posterPath, releaseYear }) => {
const MovieCard = ({ data, onRemoveFavorite }) => {
    const handleRemove = () => {
        if (onRemoveFavorite) onRemoveFavorite(data.imdbID);
      };
    
    // console.log(data);
    const posterUrl = data.Poster || '/api/placeholder/300/450';

    return (
      <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="aspect-[2/3] relative">
          <img
            src={posterUrl}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <h3 className="text-white font-semibold truncate">{data.title}</h3>
              <p className="text-gray-300 text-sm">{data.releaseYear}</p>
              
              <div className="mt-2 flex gap-2">
                {!onRemoveFavorite && <FavoriteButton movie={data} />}
                {onRemoveFavorite && (
                //   <button
                //     onClick={handleRemove}
                //     className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors"
                //   >
                //     Remove
                //   </button>
                <button
                onClick={handleRemove}
                className="p-2 rounded-full hover:bg-black/20 transition-colors group/btn"
                // aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              >
                <Heart
                  className="w-6 h-6 transition-all duration-300 text-red-500 fill-red-500 scale-110"
                />
              </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }

// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   posterPath: PropTypes.string,
//   releaseYear: PropTypes.string.isRequired,
// };

export default MovieCard;
