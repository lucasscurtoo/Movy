import React from 'react';
import PropTypes from 'prop-types';
import MovieSimilar from './movieSimilar';

const MovieSimilarCarousel = ({data}) => {
    return(
        <div className="w-max flex flex-row flex-wrap">
          {data?.map((movie) => <MovieSimilar key={data?.id} data={movie}/>)}
        </div>
    )
}

MovieSimilarCarousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MovieSimilarCarousel;
