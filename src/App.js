/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { getAllMovies } from './api/movies';
import './MovyApp/main.js';
import Main from './MovyApp/main';


function Movy(){
  return(
    <Main/>
  )
}

export default Movy;
// const [ movies, setMovies ] = useState([]);

// useEffect(() => {
//  getAllMovies.then((response)=>{
//    setMovies(response.results)
//  })
 

// })
// return(
//   <div className="main"> 
//    <header>
//     <h1>hola</h1>
//     <ul>
//      {movies.map((item) =>{ 
//        return <li  key={item.id}>{item.original_title}</li>
//        })
//      }
     
//     </ul>
//   </header>
  
//   < Main/>
//   </div>
// );
