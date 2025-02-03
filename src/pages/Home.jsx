import React, { useEffect, useState, useRef } from 'react';
import { fetchMoviesByGenre, searchMovies, fetchMoviesWithFiltersWithoutQuery, fetchMoviesWithFiltersWithQuery } from '../services/movieService';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import SEO from '../components/SEO';
import FilterBar from '../components/FilterBar';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isFilterLoad, setIsFilterLoad] = useState(true);
    const observer = useRef();
    const [filters, setFilters] = useState({
        year: null,
        rating: null,
        genre: null
    });

    useEffect(() => {
        const loadMovies = async () => {
            if ((filters.year !== null || filters.rating !== null || filters.genre !== null)) {

                if (!searchQuery) {
                    const data = await fetchMoviesWithFiltersWithoutQuery(filters, page);
                    if (isFilterLoad) {
                        setMovies(data);
                        setIsFilterLoad(false);
                    } else {
                        setMovies(prevMovies => [...prevMovies, ...data]);
                    }
                    if (data.length === 0) setHasMore(false);
                } else {
                    const data = await fetchMoviesWithFiltersWithQuery(searchQuery, filters, page);
                    if (isInitialLoad || isFilterLoad) {
                        if (isInitialLoad) {
                            setMovies(data);
                            setIsInitialLoad(false);
                        }
                        else if (isFilterLoad) {
                            setMovies(data);
                            setIsFilterLoad(false);
                        };
                    } else {
                        setMovies(prevMovies => [...prevMovies, ...data]);
                    }
                    if (data.length === 0) setHasMore(false);

                }
            } else {
                if (!searchQuery) {
                    const data = await fetchMoviesByGenre(page);
                    setMovies((prevMovies) => [...prevMovies, ...data]);
                    if (data.length === 0) setHasMore(false);
                } else {
                    const data = await searchMovies(searchQuery, page);
                    if (isInitialLoad) {
                        setMovies(data);
                        setIsInitialLoad(false);
                    } else {
                        setMovies(prevMovies => [...prevMovies, ...data]);
                    }
                    if (data.length === 0) setHasMore(false);
                }
            }
        };
        loadMovies();
    }, [searchQuery, page, filters]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setIsInitialLoad(true);
    }
    const handleFilterChange = (filterType, value) => {
        // Update your movie fetching logic here based on the selected filters
        console.log(`Filter ${filterType} changed to ${value}`);
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
        setIsFilterLoad(true);
        // Update your fetchMoviesByGenre call to include the new filters
    };

    const lastMovieElementRef = useRef();

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (lastMovieElementRef.current) {
            observer.current.observe(lastMovieElementRef.current);
        }
    }, [hasMore]);

    return (
        <div>
            <SEO
                title="Home Page"
                description="Discover the latest movies and explore different genres on our Home Page."
            />
            <div className="min-h-screen bg-gray-900">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
                    <header className="mb-4 sm:mb-8">
                        <nav className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:justify-between">
                            {/* FilterBar and SearchBar stacked on mobile, side by side on desktop */}
                            <div className="w-full sm:w-auto">
                                <FilterBar onFilterChange={handleFilterChange} />
                            </div>
                            <div className="w-full sm:w-auto">
                                <SearchBar onSearch={handleSearch} />
                            </div>
                        </nav>
                    </header>

                    <main>
                        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 px-2">
                            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies'}
                        </h2>

                        {/* MovieList with adjusted padding */}
                        <div className="px-1 sm:px-0">
                            <MovieList movies={movies} />
                        </div>

                        {/* Loading indicator */}
                        <div ref={lastMovieElementRef} className="flex justify-center p-2 sm:p-4">
                            {hasMore && (
                                <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-t-red-600 border-gray-200 rounded-full animate-spin" />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Home;