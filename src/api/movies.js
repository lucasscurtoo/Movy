const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () => {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
}

export const getUpcomingMovies = () => {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    .then((response) => response.json())
}

export const getNowPlayingMovies = () => {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json())
}

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const getMoviesImages = () => {
    return fetch(`${BASE_URL}/movie/637649/images`)
    .then((response) => response.json())
}

export const getMovieDetails = (movieId) => {   
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
  .then((response) => response.json())
}
export const getMovieCredits = (movieId) => {   
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
  .then((response) => response.json())
}



