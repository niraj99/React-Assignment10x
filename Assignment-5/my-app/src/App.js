import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Postview from './PostView/postview.js';
import LandingPage from "./LandingPage/landing.js"


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/"><LandingPage></LandingPage></Route>
        <Route exact path="/postview"><Postview></Postview></Route>
        
      </Switch>
    </Router>
    </>

  );
}

export default App;
