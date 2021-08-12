
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


 import { React,useState, useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies, getNowPlayingMovies, getMovieDetails } from '../api/movies'
import '../styles/userHome.css'
import Carousel from '../components/carousel';
import { IMAGE_URL } from '../api/movies';
import Navbar from '../components/homeUserNav'
import Footer from '../components/footer';
import { getRandomNumber } from '../utilities/functions';


function UserHome(){
    const [ popularMovies, setPopularMovies ] = useState ([]);
    const [ upcomingMovies, setUpcomingMovies] = useState ([])
    const [ nowPlayingMovies, setNowPlayingMovies] = useState ([])
    const [ randomNumber, setRandomNumber] = useState ([])
    const [ backgroundMovie, setBackgroundMovie] = useState ([])
    const [ movieDetails, setMovieDetails ] = useState ([])
   
    
    useEffect(() => {
        getPopularMovies()
        .then((response) => {
            setPopularMovies(response.results);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }, []);

    
    useEffect(() => {
        getUpcomingMovies()
        .then((response) => {
            setUpcomingMovies(response.results);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }, []);
   

    useEffect(() => {
        getNowPlayingMovies()
        .then((response) => {
            setNowPlayingMovies(response.results);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }, []);

    useEffect(() => {
        setRandomNumber(getRandomNumber(popularMovies.length))
    },[popularMovies])
    
    useEffect(() =>{
        setBackgroundMovie(popularMovies[randomNumber])
    },[randomNumber]);
    
    useEffect(() => {
        getMovieDetails()
        .then((response) => {
            setMovieDetails(response.results);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }, [backgroundMovie]);
  
 
    return(
        <>
          <div className="home-main" style={{ backgroundImage: `url(${IMAGE_URL}${popularMovies[randomNumber]?.backdrop_path})` }}>
             <Navbar/>
              <div className="home-main-info">
                    <section id="date-genre">
                    
                    <p></p>
                    </section>
                    <section id="info">
                        <h1>{backgroundMovie?.title}</h1>
                       
                        <p>{backgroundMovie?.overview}</p>
                    </section>
                </div>
            </div>
            <Carousel 
                data={popularMovies}
                name="Popular Movies"
            />
            <Carousel 
                data={upcomingMovies}
                name="upcoming movies"
            />
            <Carousel 
                data={nowPlayingMovies}
                name="Now playing in cinemas"
            />
            <Footer/>
       </>
    )
}

export default UserHome;