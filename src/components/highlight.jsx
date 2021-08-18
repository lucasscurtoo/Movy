import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import Navbar from '../components/homeUserNav';
import { getMovieDetails, IMAGE_URL } from '../api/movies';

const Highlight = ({
    movie
}) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        setMovieDetails(null);
        getMovieDetails(movie.id)
            .then((response) => {
                setMovieDetails(response);
            });
    }, []);

    return (
        <div className="home-main" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
            <Navbar/>
            <div className="home-main-info">
                <section id="date-genre">
                <p>{movieDetails?.genres.map((item) => `${item.name} `)}</p>
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
