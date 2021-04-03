import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';


class Header extends Component{
    render(){
      return(
        <div className="header-container">
          <div classname="header-title">Title</div>
          <div>
              <Link to="/">
                <button className="btn header-button-base btn-nav">Home</button>
              </Link>
              <Link to="/projects">
                <button className="btn header-button-base btn-nav">Projects</button>
              </Link>
              <Link to="/workInProgress">
                <button className="btn header-button-base btn-nav">Something</button>
              </Link>
          </div>
        </div>
      );
    }
}


export default Header;