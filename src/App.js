
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import LogIn from './pages/logIn';
import UserHome from './pages/userHome'

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
      </Switch>
    </Router>
    </>
  )
}

export default Movy;
