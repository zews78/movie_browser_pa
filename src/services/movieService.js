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
export const searchMovies = async (query = 'world', page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`);

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



export const fetchMoviesWithFiltersWithoutQuery = async (filters, page) => {
    try {
        // First, fetch the initial movie list
        let text = 'world';
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(text)}&type=movie&page=${page}`);
        let data = await response.json();
        let movies = data.Search;

        // Fetch detailed information for each movie for filtering
        const moviesWithDetails = await Promise.all(
            movies.map(async (movie) => {
                const detailResponse = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`);
                return detailResponse.json();
            })
        );
        // Apply filters
        return filterMovies(moviesWithDetails, filters);
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};


export const fetchMoviesWithFiltersWithQuery = async (query = 'world', filters, page = 1) => {
  try {
    // First, fetch the initial movie list

    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to search for movies');
    }

    const data = await response.json();
    if (data.Response === 'False') {
      throw new Error(data.Error);
    }
    // return data.Search; // List of movies
    let movies = data.Search;

    // Fetch detailed information for each movie for filtering
    console.log(`here is filtered data - without filters`, filters, data.Search);
    
    const moviesWithDetails = await Promise.all(
      movies.map(async (movie) => {
        const detailResponse = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`);
        if (!detailResponse.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return detailResponse.json();
      })
    );
    console.log(`here is filtered data - details`, moviesWithDetails);

    // Apply filters
    const final_list = filterMovies(moviesWithDetails, filters);
    console.log(`here is filtered data - details with filters`, moviesWithDetails);
    return final_list;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

const filterMovies = (movies, filters) => {
  return movies.filter(movie => {
    let meetsAllCriteria = true;

    // Year filter
    if (filters.year) {
      if (filters.year === 'Before 2020') {
        meetsAllCriteria = parseInt(movie.Year) < 2020;
      } else {
        meetsAllCriteria = movie.Year === filters.year;
      }
    }

    // Rating filter
    if (filters.rating && meetsAllCriteria) {
      const rating = parseFloat(movie.imdbRating);
      switch (filters.rating) {
        case '4+ Stars':
          meetsAllCriteria = rating >= 8.0; // Converting to 10-point scale
          break;
        case '3+ Stars':
          meetsAllCriteria = rating >= 6.0;
          break;
        case '2+ Stars':
          meetsAllCriteria = rating >= 4.0;
          break;
        default:
          break;
      }
    }

    // Genre filter
    if (filters.genre && meetsAllCriteria) {
      meetsAllCriteria = movie.Genre.includes(filters.genre);
    }

    return meetsAllCriteria;
  });
};

