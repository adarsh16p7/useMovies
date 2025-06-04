import MovieCard from "../../components/MovieCard/MovieCard";
import { useFavoriteContext } from "../../context/FavoriteContext";
import "./Favorites.css";

const Favorites = () => {
  const [favorites] = useFavoriteContext();
  return (
    <>
      {favorites.length === 0 ? (
        <div className='favorites_empty'>
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
      ) : (
        <div className='favorites'>
          {favorites.map((movie) => {
            console.log("Rendering MovieCard for:", movie);
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Favorites;
