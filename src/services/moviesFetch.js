import axios from 'axios';

const API_KEY = '12054267cdcdd4d8e665a5b76a183077';
const BASE_URL = 'https://api.themoviedb.org/3';

const moviesInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const trendingMovies = () => {
  return moviesInstance.get('/trending/movie/week');
};

export const getMoviesBySearch = query => {
  return moviesInstance.get('/search/movie', {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
  });
};

export const getMovieById = id => {
  return moviesInstance.get(`/movie/${id}`);
};

export const getMoviesCredits = id => {
  return moviesInstance.get(`/movie/${id}/credits`);
};

export const getMoviesReviews = id => {
  return moviesInstance.get(`/movie/${id}/reviews`);
};
