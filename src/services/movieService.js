// require('dotenv').config();
const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;



/**
* Fetch movies by genre
* @param {string} genre - The genre to filter movies by.
 * @param {number} page - The page number for paginated results (default: 1).
* @returns {Promise<object>} - A promise resolving to the movies data.
*/

export const fetchMoviesByGenre = async (page) => {
    try {
    //   const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(genre)}&type=movie&page=${page}`);
    let text = 'world';
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(text)}&type=movie&page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    //   console.log(data);
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      return data.Search; // Returns an array of movie objects
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      throw error;
    }
};
  

/**
 * Search movies by query
 * @param {string} query
 */
export const searchMovies = async (query, page=1) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to search for movies');
    }
    const data = await response.json();
    if (data.Response === 'False') {
      throw new Error(data.Error);
    }
    return data.Search; // List of movies
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};
