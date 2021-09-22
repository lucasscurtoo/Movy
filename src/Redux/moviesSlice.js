import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieDetails, getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../api/movies';

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
    },
    reducers: {
        setBackgroundMovie: (state, action) => {
            state.backgroundMovie = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPopularMovies.pending, (state) => {
            state.loading = true;
        }).addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload;
        }).addCase(fetchUpcomingMovies.pending, (state) => {
            state.loading = true;
        }).addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
        }).addCase(fetchNowPlayingMovies.pending, (state) => {
            state.loading = true;
        }).addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.nowPlaying = action.payload;
        })
        .addCase(fetchMovieDetails.fulfilled, (state, action) =>{
            state.movieDetails = action.payload;
        })
    }
})

export const { setBackgroundMovie } = moviesSlice.actions

export default moviesSlice.reducer;
