import { render } from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import NavBar from "./Components/NavBar";
import SWDev from "./Components/SWDev";
import WW from "./Components/WW";
import Misc from "./Components/Misc";
import React, { useState } from "react";
import Quell from "./Components/Quell";
import Neighborpedia from "./Components/Neighborpedia";
import Meds from "./Components/Meds";
import Soundboard from "./Components/Soundboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/SWDev/">
            <SWDev />
          </Route>
          <Route exact path="/WW/">
            <WW />
          </Route>
          <Route exact path="/Misc/">
            <Misc />
          </Route>
          <Route exact path="/Quell/">
            <Quell />
          </Route>
          <Route exact path="/Neighborpedia/">
            <Neighborpedia />
          </Route>
          <Route exact path="/Soundboard/">
            <Soundboard />
          </Route>
          <Route exact path="/Meds/">
            <Meds />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
