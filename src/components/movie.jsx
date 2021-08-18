

import React from 'react';
import { IMAGE_URL } from '../api/movies';
import PropTypes from 'prop-types';
import '../styles/carouselStyles.css';

const Movie = ({ data }) => {
  return (
    <div className="movie" >
       <img src={`${IMAGE_URL}${data?.poster_path}`} />
      </div>
    )
  }
  
  Movie.propTypes={
    data: PropTypes.array.isRequired,
  };
  
  export default Movie;
  