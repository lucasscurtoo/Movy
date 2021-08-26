import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import Navbar from '../components/homeUserNav';
import { getMovieDetails, IMAGE_URL } from '../api/movies';
import directorsImg from '../images/directorsLogo.png'

const Highlight = ({
    movie
}) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
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
                <p>{movieDetails?.release_date.slice(0,4)}</p>
                <p>{movieDetails?.genres.map((item) => `${item.name} `)}</p>
                </section>
                <section id="info">
                    <h1>{movieDetails?.title}</h1>
                      <section>
                        <p>{movieDetails?.runtime + "m"}</p>
                        <img src={directorsImg}></img>
                        <h1>{movieDetails?.director}</h1>
                      </section>
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
