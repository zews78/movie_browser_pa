import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Heart } from 'lucide-react';

const MovieCard = ({ data, onRemoveFavorite }) => {
  const handleRemove = () => {
    if (onRemoveFavorite) onRemoveFavorite(data.imdbID);
  };

  const posterUrl = data.Poster || '/api/placeholder/300/450';

  return (
    <div className="group relative rounded-lg overflow-hidden m-[5px]">
      <div className="aspect-[2/3] relative cursor-pointer">
        <img
          src={posterUrl}
          alt={data.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          tabIndex="0"
          aria-label={`Poster of ${data.title}`}
        />

        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Info container that slides up */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" tabIndex="0"
          aria-label={`Information about ${data.title}`}>
          <div className="p-4 bg-gradient-to-t from-black via-black/95 to-transparent">
            <div className="mb-3">
              <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2">
                {data.Title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">{data.Year}</p>
            </div>

            <div className="flex items-center gap-2">
              {!onRemoveFavorite && <FavoriteButton movie={data} />}
              {onRemoveFavorite && (
                <button
                  onClick={handleRemove}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors group/btn"
                >
                  <Heart
                    className="w-6 h-6 transition-all duration-300 text-red-500 fill-red-500"
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-0 inset-x-0 p-3 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-b from-black/90 to-transparent">
          <h4 className="text-white font-medium text-sm line-clamp-1">
            {data.title}
          </h4>
          <p className="text-gray-300 text-xs">
            {data.releaseYear}
          </p>
        </div>
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
