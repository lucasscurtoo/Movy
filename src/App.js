/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//  import React, { useState, useEffect } from 'react';
// import { render } from '@testing-library/react';
// import { getAllMovies } from './api/movies';
import Main from './pages/main';
import LogIn from './pages/logIn';

function Movy(){
  return(
    <>
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
    </>
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
