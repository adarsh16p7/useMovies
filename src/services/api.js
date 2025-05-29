const API_KEY = "e6e7651d21a2bba828ffa4b3e14fa4b4";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
