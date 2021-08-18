import Movie from "./movie";
import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({data, name}) => {
    return (
        <div className="carousel-box w-scroll">
            <h1 className="text-3xl sticky left-0">{name}</h1>
              <div className="w-max h-max flex items-center overflow-visible carousel">
                {data?.map((movie) => <Movie key={data.id} data={movie}/>)} 
              </div>
        </div>
    )
};

Carousel.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
};
export default Carousel;

