import React from 'react'
import { IMAGE_URL } from '../api/movies';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MovieSimilar = ({ data }) => {

    return (
        <>
            <a href={`/movie/${data.id}`}>
                <div className="w-64 h-max mr-6 mt-6 bgGray enlarge">
                    <div className="w-full h-40 flex justify-end align-start p-2 bg-no-repeat bg-cover bg-top rounded-t-lg" style={{ backgroundImage: `url(${IMAGE_URL}${data?.poster_path})` }} >
                        <h1 className="text-white font-bold">{data.release_date.slice(0, 4)}</h1>
                    </div>
                    <div className="w-full h-12 bgGray flex">
                        <h1 className="inline w-3/6 m-auto text-white truncate font-bold">{data?.title}</h1>
                        <FontAwesomeIcon icon={faPlus} size="2x" className="w-3/6 ml-auto mr-2 mt-2 cursor-pointer white-to-gray" />
                    </div>
                    <div className="w-full h-48 bgGray rounded-b-lg ">
                        <h1 className="text-white overflow-clip overflow-hidden h-full text-gray-300 w-11/12 mx-auto">{data.overview}</h1>
                    </div>
                </div>
            </a>
        </>
    )
}

MovieSimilar.propTypes = {
    data: PropTypes.array.isRequired,
}
export default MovieSimilar;
