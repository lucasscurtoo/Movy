import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import { IMAGE_URL } from '../api/movies'; 
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { fetchMovieDetails, fetchMovieSimilar } from '../Redux/moviesSlice';
import MovieSimilarCarousel from '../components/movieSimilarCarousel';


function MoviePage(){
    let {id} = useParams();

    const movieDetails =  useSelector((state) => state.movies.movieDetails)
    const movieSimilar = useSelector(state => state.movies.movieSimilar)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieDetails(id))
        dispatch(fetchMovieSimilar(id))
    }, [])
   
    const cast = movieDetails?.credits?.cast.slice(0,3)

    console.log(movieDetails)

 return(
         
         <> 
         <div className="w-screen h-screen bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${IMAGE_URL}${movieDetails?.poster_path})`}}>
             <div className="w-11/12 h-full mx-auto flex items-end flex-col">
              <div className="h-3/5 w-11/12 mt-2">
                  <Link to="/home">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="white-to-gray"/>
                  </Link>
              </div>
            <div className="w-11/12 h-2/5 text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold ">{movieDetails?.title}</h1>
                    <div className="flex flex-row mt-6 items-center ">
                    <button className="py-2 px-10 bg-white text-black font-xs font-bold rounded-lg w-max hover:bg-gray-200 flex items-center">
                        <FontAwesomeIcon icon={faPlay} size="2x"/>
                        <h1 className="ml-4 text-xl">Play</h1>
                    </button>
                        <FontAwesomeIcon icon={faPlus} size="2x" className="ml-4 cursor-pointer"/>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" className="ml-4 cursor-pointer"/>
                        <FontAwesomeIcon icon={faThumbsDown} size="2x" className="ml-4 cursor-pointer"/>
                        <FontAwesomeIcon icon={faVolumeMute} size="2x" className="ml-auto mr-6 cursor-pointer"/>
                    </div>
            </div>
            
        </div>
         <div className="w-screen h-2/6 bgGray flex text-white justify-center">
             <section className="w-2/5 h-full">
                 <p className="text-blue-500 font-bold">{movieDetails?.release_date?.slice(0,4)}</p>
              <p>{movieDetails?.overview}</p>
             </section>
             <section className="w-2/5 h-full">
                 <ul>
                    <li className="inline text-gray-400">Cast:&nbsp;</li>
                    <li className="inline">{cast?.map((item) => `${item.name}, `)}</li>
                    <li className="inline"> more</li>
                </ul>
                <ul>
                    <li className="inline text-gray-400">Genres:&nbsp;</li>
                    <li className="inline">{movieDetails?.genres?.map((item) => ` ${item.name}, `)}</li>
                    <li className="inline"> more</li>
                </ul>   
                
             </section>
         </div>
         <div className="w-screen h-screen bg-black">
                <MovieSimilarCarousel
                    data={movieSimilar}
                />
         </div>
       </div>
      </>
    )
}
export default MoviePage;
