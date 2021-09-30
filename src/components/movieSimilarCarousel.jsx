import React from 'react';
import movieSimilar from './movieSimilar';
import PropTypes from 'prop-types';
import MovieSimilar from './movieSimilar';

const MovieSimilarCarousel = ({data}) => {
    const first = data.slice(0,3)
    return(
        <div className="w-max h-max flex justify-between">
          {first?.map((movie) => <MovieSimilar key={data.id} data={movie}/>)}
        </div>
    )
}

MovieSimilarCarousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MovieSimilarCarousel;
