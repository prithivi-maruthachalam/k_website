import {BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';

import Header from "./components/header.js";
import Home from "./components/home";
import WIP from "./components/workInProgress"
import Footer from "./components/footer"


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';
import "./App.css";


const App = () => {
  return (
    <div className="fluid-container text-center">
      <Header />
      <div className="fluid-container globalContainer">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="">
              <WIP/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
