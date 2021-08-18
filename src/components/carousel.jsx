import Movie from "./movie";
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/carouselStyles.css'

const Carousel = ({data, name}) => {
    return (
        <div className="carousel-box">
            <h1>{name}</h1>
              <div className="carousel-img">
                {data?.map((movie) => <Movie key={data.id} data={movie}/>)} 
              </div>
        </div>
    )
};

Carousel.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    map: PropTypes.func
};
export default Carousel;

