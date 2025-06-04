/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = useCallback((movie) => {
    setFavorites((prev) => {
      // Prevent duplicate additions
      if (prev.some((fav) => fav.id === movie.id)) {
        return prev;
      }
      return [...prev, movie];
    });
  }, []);

  const removeFromFavorites = useCallback((movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }, []);

  const isFavorite = useCallback(
    (movieId) => {
      if (!movieId) return false;
      return favorites.some((movie) => movie.id === movieId);
    },
    [favorites]
  );

  const value = useMemo(
    () => [favorites, addToFavorites, removeFromFavorites, isFavorite],
    [favorites, addToFavorites, removeFromFavorites, isFavorite]
  );

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};
