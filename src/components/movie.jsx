/* eslint-disable react/prop-types */
import React from 'react';
import { IMAGE_URL } from '../api/movies';
import '../styles/carouselStyles.css'

const Movie = ({ data }) => {

    return (
      <div className="movie" >
       <img src={`${IMAGE_URL}${data?.poster_path}`} />
      </div>
    )
  }
  
  export default Movie;