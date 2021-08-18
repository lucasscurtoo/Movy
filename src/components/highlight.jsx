import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import Navbar from '../components/homeUserNav';
import { getMovieDetails, IMAGE_URL } from '../api/movies';

const Highlight = ({
    movie
}) => {
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        console.log(movie);
        getMovieDetails(movie.id)
            .then((response) => {
                if(!response?.success) {
                    setMovieDetails(null);
                } else {
                    setMovieDetails(response);
                }
                console.log("response: ", response);
            });
    }, [movie]);

    return (
        <div className="home-main" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
            <Navbar/>
            <div className="home-main-info">
                <section id="date-genre">
                <p>{movieDetails?.genres}</p>
                <p></p>
                </section>
                <section id="info">
                    <h1>{movieDetails?.title}</h1>
                    <h2>{movieDetails?.title}</h2>
                    
                    <p>{movieDetails?.overview}</p>
                </section>
            </div>
        </div>
    )
}

Highlight.propTypes = {
    movie: PropTypes.object,
}

export default Highlight;
