<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'
import './App.css';
import MoviePage from './pages/moviePage';
=======

=======
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'
<<<<<<< HEAD
>>>>>>> 55030bc (adding home, movies and promises to the API)
=======
import './App.css';
<<<<<<< HEAD
>>>>>>> 2ac6abd (subiendo los errores)
=======
import MoviePage from './pages/moviePage';
>>>>>>> fa7577d (onclick opens a page with the movie clicked)

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
<<<<<<< HEAD
        <Route path="/movie/:id">
         <MoviePage/>
        </Route>
=======
>>>>>>> 55030bc (adding home, movies and promises to the API)
=======
        <Route path="/movie/:id">
         <MoviePage/>
        </Route>
>>>>>>> fa7577d (onclick opens a page with the movie clicked)
      </Switch>
    </Router>
    </>
  )
}
export default Movy;
