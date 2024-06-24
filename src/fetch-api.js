import axios from "axios";

axios.defaults.baseURL = axios.defaults.baseURL =
  "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzhiZjVhOTJlNDgzNTBlMjExODEwZmQ3MjVkNzJkYyIsIm5iZiI6MTcxOTI0OTE1Mi41NjQ2MjksInN1YiI6IjY2NzlhMWU5MDM0MDhjNzQyZGQzYjBhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1t463_cQDDs-3SxVxbALH7u6AVoNvgJAhluDWjGGwbM",
  },
};

export const trendingMovie = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieRew = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data;
};

export const getSomeMovies = async (searchMovies) => {
  const response = await axios.get(
    `search/movie?query=${searchMovies}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};
