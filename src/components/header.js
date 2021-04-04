import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

import logo from '../media/images/logoimg.png'


class Header extends Component{
    render(){
      return(
        <div className="header-container">
          <div className="headerCont">
            <div className="logoCont"><img src={ logo} className="logo"/></div>
            <div classname="header-title">
                Digital India
            </div>
            </div>
          <div>
              <Link to="/">
                <button className="btn header-button-base btn-nav">Home</button>
              </Link>
              <Link to="/projects">
                <button className="btn header-button-base btn-nav">Projects</button>
              </Link>
              <Link to="/news">
                <button className="btn header-button-base btn-nav">News</button>
              </Link>
              <Link to="/gallery">
                <button className="btn header-button-base btn-nav">Gallery</button>
              </Link>
          </div>
        </div>
      );
    }
}


export default Header;