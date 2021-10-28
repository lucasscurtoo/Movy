const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
export const Youtube_URL = "https://www.youtube.com/embed/"

export const getPopularMovies = () => (
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
)

export const getUpcomingMovies = () => (
   fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    .then((response) => response.json())
)

export const getNowPlayingMovies = () => (
   fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json())
)

export const getMovieDetails = (movieId) => (
   fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`)
  .then((response) => response.json())
)
export const getMovieSimilar = (movieId) =>  (
  fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`)
 .then((response) => response.json())
)
export const getMovieVideos = (movieId) => (
  fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
  .then((response) => response.json())
)

