<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'
import './App.css';
import MoviePage from './pages/moviePage';
=======

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'
<<<<<<< HEAD
>>>>>>> 55030bc (adding home, movies and promises to the API)
=======
import './App.css';
>>>>>>> 2ac6abd (subiendo los errores)

function Movy(){
  return(
    <>
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/home">
          <UserHome/>
        </Route>
<<<<<<< HEAD
        <Route path="/movie/:id">
         <MoviePage/>
        </Route>
=======
>>>>>>> 55030bc (adding home, movies and promises to the API)
      </Switch>
    </Router>
    </>
  )
}
export default Movy;
