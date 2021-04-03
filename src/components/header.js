import React, {Component, createRef} from 'react';

import '../styles/header.css';


class Header extends Component{
    render(){
      return(
        <div className="header-container">
          <div classname="header-title">Title</div>
          <div>
            Navigation links will go here
          </div>
        </div>
      );
    }
}


export default Header;