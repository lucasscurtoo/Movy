import React from 'react';
import { IMAGE_URL } from '../api/movies';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Movie = ({ data }) => {

  return (
    <Link to={`movie/${data.id}`}  >
      <div className="w-52 h-5/6 ml-2 enlarge">
       <img  className="w-full h-auto object-cover" src={`${IMAGE_URL}${data?.poster_path}`}/>
      </div>
    </Link>
  )
}
Movie.propTypes={
   data: PropTypes.array.isRequired,
};
  
  export default Movie;
