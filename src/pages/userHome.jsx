import { React, useEffect } from 'react';
import Carousel from '../components/carousel';
import Highlight from '../components/highlight';
import Footer from '../components/footer';
import Loading from '../components/loading'
import { getRandomNumber } from '../utilities/functions';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies, setBackgroundMovie } from '../Redux/moviesSlice'

function UserHome() {

    const loading = useSelector((state) => state.movies.loading);
    const popular = useSelector((state) => state.movies.popular);
    const upcoming = useSelector((state) => state.movies.upcoming);
    const nowPlaying = useSelector((state) => state.movies.nowPlaying);
    const bgcMovie = useSelector((state) => state.movies.backgroundMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchUpcomingMovies())
        dispatch(fetchNowPlayingMovies())
    }, []);
    useEffect(() => {
        dispatch(setBackgroundMovie(popular[getRandomNumber(popular.length)]))
    }, [popular])

    return (
        <>
            {bgcMovie && <Highlight
                movie={bgcMovie}
            />}
            {loading && <Loading />}
            <Carousel
                data={popular}
                name="Popular Movies"
            />
            <Carousel
                data={upcoming}
                name="upcoming movies"
            />
            <Carousel
                data={nowPlaying}
                name="Now playing in cinemas"
            />
            <Footer />
        </>
    )
}

export default UserHome;
