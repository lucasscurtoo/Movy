import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
<<<<<<< HEAD
<<<<<<< HEAD
import { getMovieCredits, getMovieDetails,IMAGE_URL } from '../api/movies'; 
import playImage from '../images/playImg.jpg'

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


function MoviePage(){
    let {id} = useParams();

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
>>>>>>> 081fa2f (uploading changes)

    useEffect(() => {
        getMovieDetails(id)
        .then((response) => {
            setMovieRequested(response);
        })
    }, [])
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
   
    const cast = movieCredits?.cast.slice(0,3)

=======
    
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
    console.log(movieCredits) 
    console.log(movieRequested) 
    let cast = movieCredits?.cast.slice(0,3)
=======
   
    const cast = movieCredits?.cast.slice(0,3)
>>>>>>> 7fcbc16 (making changes to merge)

>>>>>>> 081fa2f (uploading changes)
 return(
      <>
         <div className="moviePage-box" style={{backgroundImage: `url(${IMAGE_URL}${movieRequested?.poster_path})`}}>
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
            </div>
            
         </div>
         <div className="movie-info">
<<<<<<< HEAD

>>>>>>> fa7577d (onclick opens a page with the movie clicked)
=======
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
>>>>>>> 081fa2f (uploading changes)
         </div>
         <div className="more-like-this">

         </div>
      </>
    )
}
export default MoviePage;
