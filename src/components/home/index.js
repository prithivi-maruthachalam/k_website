import React, { Component } from 'react';

import Hero from "./hero.js";


import '../../styles/home/index.css';
class Home extends Component {
  render(){
    return (
        <div className="fluid-container text-center homeContainer">
          <Hero/>
        </div>
    );
  }
}

export default Home;

