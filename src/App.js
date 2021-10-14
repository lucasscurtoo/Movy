import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'
import './App.css';
import MoviePage from './pages/moviePage';

function Movy(){
  return(
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/home">
          <UserHome/>
        </Route>
        <Route path="/movie/:id">
         <MoviePage/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default Movy;
