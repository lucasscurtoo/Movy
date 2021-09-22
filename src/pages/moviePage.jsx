import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { getMovieCredits, getMovieDetails,IMAGE_URL } from '../api/movies'; 
import playImage from '../images/playImg.jpg'
import backImage from '../images/flechaizq.png'
import {Link} from 'react-router-dom';

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
  
   
    const cast = movieCredits?.cast.slice(0,3)

 return(
      <>
         <div className="moviePage-box" style={{backgroundImage: `url(${IMAGE_URL}${movieRequested?.poster_path})`}}>
              <div className="h-3/5 w-11/12 mt-2">
                  <Link to="/home">
                    <img className="w-8 " src={backImage}/>
                  </Link>
              </div>
            <div className="w-11/12 h-2/5 ml-auto text-white">
                <h1 className="text-blue">{movieRequested?.title}</h1>
                <button className="py-2 px-4 bgc-white text-black font"><img className="w-10 inline" src={playImage}></img>Play</button>
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
         </div>
         <div className="more-like-this">

         </div>
      </>
    )
}
export default MoviePage;
