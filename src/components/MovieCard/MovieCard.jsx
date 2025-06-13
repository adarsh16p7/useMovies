import { useFavoriteContext } from "../../context/FavoriteContext";
import "../MovieCard/MovieCard.css";
import { useMemo } from "react";

const MovieCard = ({ movie }) => {
  const [favorites, addToFavorites, removeFromFavorites, isFavorite] = useFavoriteContext();

  // Use useMemo to prevent recalculation on every render
  const favorite = useMemo(() => isFavorite(movie.id), [isFavorite, movie.id]);

  console.log("Favorite Movies:", favorites);
  console.log("This is the movie in focus:", movie);

  const onFavClick = (evt) => {
    evt.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    console.log("favorite button clicked!");
  };

  return (
    <div className='movie_card'>
      <div className='movie_poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='movie_overlay'>
          <button className={`favorite_btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className='movie_info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
