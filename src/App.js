import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Component } from 'react';

import Home from "./home.js"
import Page1 from "./page1.js"
import Page2 from "./page2.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/path1">
          <Page1/>
        </Route>
        <Route path="/path2">
          <Page2/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
