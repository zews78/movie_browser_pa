import React, { useEffect, useState } from 'react';
import { fetchMoviesByGenre, searchMovies } from '../services/movieService';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [isInitialLoad, setIsInitialLoad] = useState(true);


  useEffect(() => {
    const loadMovies = async () => {
        if(!searchQuery){
            const data = await fetchMoviesByGenre(page);
          //   console.log(data, 'data just after calling genre fetch call');
            // setMovies(data);
            setMovies((prevMovies) => [...prevMovies, ...data]);
            if (data.length === 0) setHasMore(false);
        }else{
            const data = await searchMovies(searchQuery, page);
          //   console.log(data, 'data just after calling search fetch call');
        //   setMovies(data);
            if (isInitialLoad) {
                setMovies(data);
                setIsInitialLoad(false);
                } else {
                setMovies(prevMovies => [...prevMovies, ...data]);
            }
        // setMovies((prevMovies) => [...prevMovies, ...data]);
        if (data.length === 0) setHasMore(false);
        }
    };
    console.log(page, "page");
    loadMovies();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsInitialLoad(true);
  }

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white opacity-0 hidden sm:block">MovieFlix</h1>
            <SearchBar onSearch={handleSearch} />
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <h2 className="text-xl font-semibold text-white mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies'}
          </h2>
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center p-4">
                <div className="w-8 h-8 border-4 border-t-red-600 border-gray-200 rounded-full animate-spin"></div>
              </div>
            }
          >
            <MovieList movies={movies} />
          </InfiniteScroll>
        </main>
      </div>
    </div>
  );
};

export default Home;
