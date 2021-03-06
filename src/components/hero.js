import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import arrow from '../media/icons/right-arrow.png';
import gear from '../media/images/gear.png'
import rock from "../media/images/Rocket-Transparent.png";

import '../styles/hero.css';

class Hero extends Component{

    render(){
        return(
            <div className="fluid-container">
                
                <div className="fluid-container hero-base">
                
                    <div className="hero-image-bg-left">
                        <img src={gear} alt="" className="gearImage" />
                        <img src={ gear} alt="" className="gearImage2"/>
                    </div>
                
                    <div className="hero-image-bg-right text-right">
                        <div className="hero-text">LAUNCHING</div>
                        <div className="hero-text">A DIGITAL</div>
                        <div className="hero-text">INDIA!</div>

                        <div className="mt-4-5 this">
                            <Link to="/projects">
                                <button className="btn btn-light btn-explore">
                                    Explore <img className="btn-img" src={arrow} alt="space saving furniture for small homes"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                
                </div>
                <div className="hero-base-2">
                    <div className="content-container">
                        <h2 className="content-title">
                            Introducing a new country
                        </h2>
                        <p className="content">
                            Digital India is a campaign launched by
                            the Government of India in order to ensure
                            the Government's services are made available to
                             citizens electronically by improved online
                             infrastructure and by increasing Internet
                              connectivity or making the country digitally
                              empowered in the field of technology.
                        </p>
                    </div>

                </div>

            </div>
        );
    }
}

export default Hero;