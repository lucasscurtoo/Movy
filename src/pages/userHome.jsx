import { React,useState, useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies, getNowPlayingMovies } from '../api/movies'
import Carousel from '../components/carousel';
import Highlight from '../components/highlight';
import Footer from '../components/footer';
import { getRandomNumber } from '../utilities/functions';
import '../styles/userHome.css'


function UserHome(){
    const [ popularMovies, setPopularMovies ] = useState ([]);
    const [ upcomingMovies, setUpcomingMovies] = useState ([])
    const [ nowPlayingMovies, setNowPlayingMovies] = useState ([])
    const [ randomNumber, setRandomNumber ] = useState ([])
    const [ backgroundMovie, setBackgroundMovie] = useState ([])
    
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

    return(
        <>
        {backgroundMovie && <Highlight
            movie={backgroundMovie}
        />}
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
