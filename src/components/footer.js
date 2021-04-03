import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="fluid-container dev-base text-center" style={{...this.props.styling}}>
                    <span className="dev-text">
                            a Government of India initiative
                    </span>
            </div>
        );
    }
}

export default Footer;

Footer.defaultProps = {
    styling : {
        backgroundColor: "#26567e",
        fontSize: "25px",
        padding: "10px 0",
    }    
}