import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const movies = [
    { id: 1, title: "Titanic", release_date: "1999" },
    { id: 2, title: "Fight Club", release_date: "2002" },
    { id: 3, title: "The Avengers", release_date: "2012" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search button clicked!");
  };
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search_form'>
        <input type='text' placeholder='Search for movies...' className='search_input' />
        <button className='search_btn'>Search</button>
      </form>
      <div className='movie_grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
