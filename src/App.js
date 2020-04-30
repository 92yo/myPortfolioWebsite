import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LandingPage,
  Experience,
  Portfolio,
  Skills,
  Education,
  Awards,
  Volunteering,
  About
} from "./screens";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/projects" exact component={Portfolio} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/education" exact component={Education} />
          <Route path="/awards" exact component={Awards} />
          <Route path="/volunteering" exact component={Volunteering} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
