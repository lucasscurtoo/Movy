/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Movie from "./movie";
import React from 'react';
import '../styles/carouselStyles.css'

const Carousel = ({ data, name }) => {
  return (
    <div className="carousel-box">
    <h1>{name}</h1>
     
        <div className="carousel-img">
        {data?.map((movie) => <Movie data={movie}/>)}
        </div>
      
    </div>
  )
}

export default Carousel;
