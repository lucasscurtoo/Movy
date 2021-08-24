import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { getMovieCredits, getMovieDetails,IMAGE_URL } from '../api/movies'; 
import playImage from '../images/playImg.jpg'
import '../styles/moviePage.css'


function MoviePage(){
    let {id} = useParams();

    const [ movieRequested, setMovieRequested ] = useState(null);
    const [ movieCredits, setMovieCredits ] = useState(null);

    useEffect(() => {
        getMovieDetails(id)
        .then((response) => {
            setMovieRequested(response);
        })
    }, [])
    useEffect(() => {
        getMovieCredits(id)
        .then((response) => {
            setMovieCredits(response);
        })
    }, [])
    console.log(movieCredits) 
    console.log(movieRequested) 
    let cast = movieCredits?.cast.slice(0,3)

 return(
      <>
         <div className="moviePage-box" style={{backgroundImage: `url(${IMAGE_URL}${movieRequested?.poster_path})`}}>
            <div className="movie-play">
                <h1>{movieRequested?.title}</h1>
                <button><img src={playImage}></img>Play</button>
            </div>
         </div>
         <div className="movie-info">
             <section className="container">
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
            <p>{movieRequested?.overview}</p>
             </section>
             <section className="container">
                <ul>
                    <li>Cast:&nbsp;</li>
                    <li>{cast?.map((item) => `  ${item.name}, `)}</li>
                    <li>more</li>
                </ul>
                <ul>
                    <li>Genres:&nbsp;</li>
                    {/* <li>{movieRequested?.map((item) => ` ${item.name}`)}</li> */}
                    <li>more</li>
                </ul>   
                {/* <p>{movieRequested?.title}</p> */}
             </section>
         </div>
         <div className="more-like-this">

         </div>
      </>
    )
}
export default MoviePage;
