import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { getMovieCredits, getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies, getMovieSimilar, getMovieVideos } from '../api/movies';
=======
import { getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../api/movies';
>>>>>>> 4149e80 (subiendo archivos para ver como arreglar un problema de redux)
=======
import { getMovieCredits, getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies, getMovieSimilar } from '../api/movies';
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
=======
import { getMovieCredits, getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies, getMovieSimilar, getMovieVideos } from '../api/movies';
>>>>>>> 4ca6a93 (uploadingMoreFeatures)

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopular', async() => {
    const response = await getPopularMovies();
    return response.results;
})
export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcoming', async() => {
    const response = await getUpcomingMovies();
    return response.results;
})
export const fetchNowPlayingMovies = createAsyncThunk('movies/fetchNowPlaying', async() => {
    const response = await getNowPlayingMovies();
    return response.results;
})
export const fetchMovieDetails = createAsyncThunk('movies/movieDetails', async(movieId) =>{
    const response = await getMovieDetails(movieId);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
    return response;
})
export const fetchMovieSimilar = createAsyncThunk('movie/movieSimilar', async(movieId) =>{
    const response = await getMovieSimilar(movieId);
<<<<<<< HEAD
    return response.results;
})
export const fetchMovieVideos = createAsyncThunk('movie/movieVideos', async(movieId) =>{
    const response = await getMovieVideos(movieId);
    return response.results;
})

<<<<<<< HEAD
=======
=======
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
    return response.results;
})
>>>>>>> 4149e80 (subiendo archivos para ver como arreglar un problema de redux)
=======
>>>>>>> 4ca6a93 (uploadingMoreFeatures)
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: false,
        popular: [],
        upcoming: [],
        nowPlaying: [],
        backgroundMovie: [],
        movieDetails: [],
<<<<<<< HEAD
<<<<<<< HEAD
        movieSimilar: [],
        movieVideos:[],
=======
>>>>>>> 4149e80 (subiendo archivos para ver como arreglar un problema de redux)
=======
        movieSimilar: [],
<<<<<<< HEAD
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
=======
        movieVideos:[],
>>>>>>> 4ca6a93 (uploadingMoreFeatures)
    },
    reducers: {
        setBackgroundMovie: (state, action) => {
            state.backgroundMovie = action.payload
        }
    },
    extraReducers: builder => {
<<<<<<< HEAD
<<<<<<< HEAD
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload;
        }).addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
=======
        builder.addCase(fetchPopularMovies.pending, (state) => {
            state.loading = true;
        }).addCase(fetchPopularMovies.fulfilled, (state, action) => {
=======
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
            state.loading = false;
            state.popular = action.payload;
        }).addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
<<<<<<< HEAD
        }).addCase(fetchNowPlayingMovies.pending, (state) => {
            state.loading = true;
>>>>>>> 4149e80 (subiendo archivos para ver como arreglar un problema de redux)
=======
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
        }).addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.nowPlaying = action.payload;
        })
<<<<<<< HEAD
<<<<<<< HEAD
        .addCase(fetchMovieDetails.pending, (state, action) =>{
            state.loading = true;
        })
        .addCase(fetchMovieDetails.fulfilled, (state, action) =>{
            state.movieDetails = action.payload;
            state.loading = false;
        })
        .addCase(fetchMovieSimilar.fulfilled, (state, action) =>{
            state.movieSimilar = action.payload;
            state.loading = false;
        })
        .addCase(fetchMovieVideos.fulfilled, (state, action) =>{
            state.movieVideos = action.payload; 
            state.loading = false;
=======
        .addCase(fetchMovieDetails.fulfilled, (state, action) =>{
            state.movieDetails = action.payload;
>>>>>>> 4149e80 (subiendo archivos para ver como arreglar un problema de redux)
=======
        .addCase(fetchMovieDetails.pending, (state, action) =>{
            state.loading = true;
        })
        .addCase(fetchMovieDetails.fulfilled, (state, action) =>{
            state.movieDetails = action.payload;
            state.loading = false;
        })
        .addCase(fetchMovieSimilar.fulfilled, (state, action) =>{
            state.movieSimilar = action.payload;
            state.loading = false;
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
        })
        .addCase(fetchMovieVideos.fulfilled, (state, action) =>{
            state.movieVideos = action.payload; 
            state.loading = false;
        })
    }
})

export const { setBackgroundMovie } = moviesSlice.actions

export default moviesSlice.reducer;
