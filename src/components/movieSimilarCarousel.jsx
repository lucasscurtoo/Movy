import React from 'react';
<<<<<<< HEAD
=======
import movieSimilar from './movieSimilar';
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
import PropTypes from 'prop-types';
import MovieSimilar from './movieSimilar';

const MovieSimilarCarousel = ({data}) => {
<<<<<<< HEAD
    return(
        <div className="w-max flex flex-row flex-wrap">
          {data?.map((movie) => <MovieSimilar key={data.id} data={movie}/>)}
=======
    const first = data.slice(0,3)
    return(
        <div className="w-max h-max flex justify-between">
          {first?.map((movie) => <MovieSimilar key={data.id} data={movie}/>)}
>>>>>>> 87756c5 (adding movieSimilars to the movie page)
        </div>
    )
}

MovieSimilarCarousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MovieSimilarCarousel;
