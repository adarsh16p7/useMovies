import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./HomePage.css";
import { searchMovies, getPopularMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
    console.log("Search button clicked!");
  };
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search_form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search_input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search_btn'>Search</button>
      </form>
      <div className='movie_grid'>
        {loading ? <div className='loading'>Loading...</div> : movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
