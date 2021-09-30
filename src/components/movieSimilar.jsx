import React from 'react'
import {IMAGE_URL} from '../api/movies';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const MovieSimilar = ({data}) => {
    return(
       <>
       <div className="w-64 h-60">
            <div className="w-full h-52 flex justify-end align-start p-2 bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${IMAGE_URL}${data?.poster_path})`}} >
                <h1 className="text-white font-bold">{data.release_date.slice(0,4)}</h1>
            </div>
            <div className="w-full h-20 bgGray">
                <FontAwesomeIcon icon={faPlus} size="2x" className="ml-52 mt-2 cursor-pointer white-to-gray"/>
            </div>
            <div className="w-full h-60 bgGray">
            <h1 className="text-white overflow-clip overflow-hidden ">{data.overview}</h1>
            </div>

       </div>
       </>
    )
}

MovieSimilar.propTypes={
    data:PropTypes.array.isRequired,
}
export default MovieSimilar;
