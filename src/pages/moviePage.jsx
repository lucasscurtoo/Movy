import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { getMovieDetails,IMAGE_URL } from '../api/movies'; 
import '../styles/moviePage.css'


function MoviePage(){
    let {id} = useParams();

    const [ movieRequested, setMovieRequested ] = useState(null);

    useEffect(() => {
        getMovieDetails(id)
        .then((response) => {
            setMovieRequested(response);
        })
    }, [])
    
 return(
      <>
         <div className="moviePage-box" style={{backgroundImage: `url(${IMAGE_URL}${movieRequested?.poster_path})`}}>
            <div className="movie-play">
                <h1>{movieRequested?.title}</h1>
            </div>
         </div>
         <div className="movie-info">

         </div>
         <div className="more-like-this">

         </div>
      </>
    )
}
export default MoviePage;
