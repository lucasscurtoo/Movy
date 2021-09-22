import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies, getMovieSimilar, getMovieVideos } from '../api/movies';

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
    return response;
})
export const fetchMovieSimilar = createAsyncThunk('movie/movieSimilar', async(movieId) =>{
    const response = await getMovieSimilar(movieId);
    return response.results;
})
export const fetchMovieVideos = createAsyncThunk('movie/movieVideos', async(movieId) =>{
    const response = await getMovieVideos(movieId);
    return response.results;
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: false,
        popular: [],
        upcoming: [],
        nowPlaying: [],
        backgroundMovie: [],
        movieDetails: [],
        movieSimilar: [],
        movieVideos:[],
    },
    reducers: {
        setBackgroundMovie: (state, action) => {
            state.backgroundMovie = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload;
        }).addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
        }).addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.nowPlaying = action.payload;
        })
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
        })
    }
})

export const { setBackgroundMovie } = moviesSlice.actions

export default moviesSlice.reducer;
