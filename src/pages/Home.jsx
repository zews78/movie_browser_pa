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
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>Popular Movies</h1>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <MovieList movies={movies} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
