/* eslint-disable no-unused-vars */
import React from 'react';
import { IMAGE_URL } from '../api/movies';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../styles/carouselStyles.css';



const Movie = ({ data }) => {

  return (
    <Link to={`movie/${data.id}`}  >
      <div className="movie">
       <img src={`${IMAGE_URL}${data?.poster_path}`}/>
      </div>
    </Link>
  )
}
Movie.propTypes={
   data: PropTypes.array.isRequired,
};
  
  export default Movie;
   