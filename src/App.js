import {BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';

import Header from "./components/header.js";
import Home from "./components/hero.js";
import WIP from "./components/workInProgress"
import Footer from "./components/footer"
import Pros from "./components/pros.js"
import News from "./components/news.js"
import Gallery from "./components/galley.js"


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import "./App.css";


const App = () => {
  return (
    <div className="fluid-container text-center">

      <div className="fluid-container globalContainer">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/gallery">
              <Gallery/>
            </Route>
            <Route exact path="/projects">
              <Pros/>
            </Route>
            <Route exact path="/news">
              <News/>
            </Route>
            <Route exact path="/workInProgress">
              <WIP/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
