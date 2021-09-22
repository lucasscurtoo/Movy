import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/homeUserNav';
import { IMAGE_URL } from '../api/movies';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../Redux/moviesSlice';

const Highlight = ({
    movie
}) => {
    const movieDetails = useSelector((state) => state.movies.movieDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieDetails(movie.id))
    }, [movie]);


    console.log(movie.id)
    console.log(movieDetails)
    return (
        <>
            <Navbar />
            <div className="w-full bg-cover bg-no-repeat bg-center h-screen sm:h-80" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
                <div className="w-4/5 h-100 flex flex-col m-auto pt-32 text-white sm:mt-6">
                    <section className=" w-full text-2xl font-bold sm:text-sm">
                        <p>{movieDetails?.release_date?.slice(0, 4)}</p>
                        <p>{movieDetails?.genres?.map((item) => `${item.name} `)}</p>
                    </section>
                    <section className="w-full h-2/5">
                        <h1 className="text-6xl font-bold mt-6 sm:text-xl">{movieDetails?.title}</h1>
                        <section className="flex flex-row">
                            <p className="h-full p-3  bgLila inline rounded-lg mr-6 sm:p-1">{movieDetails?.runtime + "m"}</p>
                        </section>
                        <p className="text-3xl mr-80 sm:text-xs sm:mr-6">{movieDetails?.overview}</p>
                    </section>
                </div>
            </div>
        </>
    )
}

Highlight.propTypes = {
    movie: PropTypes.object,
}

export default Highlight;
