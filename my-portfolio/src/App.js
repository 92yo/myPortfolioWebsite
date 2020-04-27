import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {LandingPage, Resume, Portfolio, Contact} from './screens';

function App () {
    return (
      <>
      <CssBaseline/>
      <Router>
          <Switch>  
          <Route path="/" exact component={LandingPage}/>
          <Route path="/resume" exact component={Resume}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Router>
      </>
    )
}

export default App

