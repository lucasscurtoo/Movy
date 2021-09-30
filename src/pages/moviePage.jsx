<<<<<<< HEAD
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
<<<<<<< HEAD
<<<<<<< HEAD
import { getMovieCredits, getMovieDetails,IMAGE_URL } from '../api/movies'; 
import playImage from '../images/playImg.jpg'
import backImage from '../images/flechaizq.png'
import {Link} from 'react-router-dom';

<<<<<<< HEAD
=======
import { getMovieDetails,IMAGE_URL } from '../api/movies'; 
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
import { getMovieCredits, getMovieDetails,IMAGE_URL } from '../api/movies'; 
import playImage from '../images/playImg.jpg'
>>>>>>> 081fa2f (uploading changes)
=======
>>>>>>> 17b391e (adding redux to the project)
import '../styles/moviePage.css'
=======
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
>>>>>>> 140d4f5 (adding movieSimilars to the movie page)


function MoviePage(){
    let {id} = useParams();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   

    const [ movieRequested, setMovieRequested ] = useState(null);
    const [ movieCredits, setMovieCredits ] = useState(null);
=======
=======
   

>>>>>>> 17b391e (adding redux to the project)
    const [ movieRequested, setMovieRequested ] = useState(null);
<<<<<<< HEAD
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
    const [ movieCredits, setMovieCredits ] = useState(null);
<<<<<<< HEAD
>>>>>>> 081fa2f (uploading changes)
=======
   
>>>>>>> 3cda24c (subiendo archivos para ver como arreglar un problema de redux)
=======
    const movieDetails =  useSelector((state) => state.movies.movieDetails)
    const movieSimilar = useSelector(state => state.movies.movieSimilar)
    const dispatch = useDispatch();
>>>>>>> 140d4f5 (adding movieSimilars to the movie page)

    useEffect(() => {
        dispatch(fetchMovieDetails(id))
        dispatch(fetchMovieSimilar(id))
    }, [])
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 081fa2f (uploading changes)
    useEffect(() => {
        getMovieCredits(id)
        .then((response) => {
            setMovieCredits(response);
        })
    }, [])
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   
    const cast = movieCredits?.cast.slice(0,3)

=======
    
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
    console.log(movieCredits) 
    console.log(movieRequested) 
    let cast = movieCredits?.cast.slice(0,3)
=======
=======
  
>>>>>>> 3cda24c (subiendo archivos para ver como arreglar un problema de redux)
   
    const cast = movieCredits?.cast.slice(0,3)
>>>>>>> 7fcbc16 (making changes to merge)
=======
   
    const cast = movieDetails?.credits?.cast.slice(0,3)

    console.log(movieDetails)
>>>>>>> 140d4f5 (adding movieSimilars to the movie page)

>>>>>>> 081fa2f (uploading changes)
 return(
<<<<<<< HEAD
      <>
         <div className="moviePage-box" style={{backgroundImage: `url(${IMAGE_URL}${movieRequested?.poster_path})`}}>
<<<<<<< HEAD
            <div className="movie-play">
<<<<<<< HEAD
<<<<<<< HEAD
                <h1 className="text-blue">{movieRequested?.title}</h1>
                <button><img src={playImage}></img>Play</button>
            </div>
            
         </div>
         <div className="movie-info">
             <section className="container">
              <p>{movieRequested?.overview}</p>
             </section>
             <section className="container">
                <ul>
                    <li>Cast:&nbsp;</li>
                    <li>{cast?.map((item) => `${item.name}, `)}</li>
                    <li> more</li>
                </ul>
                <ul>
                    <li>Genres:&nbsp;</li>
                    <li>{movieRequested?.genres.map((item) => ` ${item.name}, `)}</li>
                    <li> more</li>
                </ul>   
                
             </section>
=======
                <h1>{movieRequested?.title}</h1>
=======
                <h1 className="text-blue">{movieRequested?.title}</h1>
>>>>>>> 17b391e (adding redux to the project)
                <button><img src={playImage}></img>Play</button>
=======
=======
         
         <> 
         <div className="w-screen h-screen bg-no-repeat bg-cover bg-top" style={{backgroundImage: `url(${IMAGE_URL}${movieDetails?.poster_path})`}}>
             <div className="w-11/12 h-full mx-auto flex items-end flex-col">
>>>>>>> 140d4f5 (adding movieSimilars to the movie page)
              <div className="h-3/5 w-11/12 mt-2">
                  <Link to="/home">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="white-to-gray"/>
                  </Link>
              </div>
<<<<<<< HEAD
            <div className="w-11/12 h-2/5 ml-auto text-white">
                <h1 className="text-blue">{movieRequested?.title}</h1>
                <button className="py-2 px-4 bgc-white text-black font"><img className="w-10 inline" src={playImage}></img>Play</button>
>>>>>>> 3cda24c (subiendo archivos para ver como arreglar un problema de redux)
            </div>
            
         </div>
         <div className="movie-info">
<<<<<<< HEAD

>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
             <section className="container">
              <p>{movieRequested?.overview}</p>
=======
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
>>>>>>> 140d4f5 (adding movieSimilars to the movie page)
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
>>>>>>> 081fa2f (uploading changes)
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
