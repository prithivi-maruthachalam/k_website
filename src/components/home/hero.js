import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import arrow from '../../media/icons/right-arrow.png';

import heroImage from '../../media/images/hero1_wardrobe/base.png'
import heroImageDoor from '../../media/images/hero1_wardrobe/door.png'
import heroImageDoor2 from '../../media/images/hero1_wardrobe/door2.png';

import '../../styles/home/hero.css';

class Hero extends Component{

    render(){
        return(
            <div className="fluid-container">
                
                <div className="fluid-container hero-base">
                
                    <div className="hero-image-bg-left">
                        <img src={heroImage} alt="space saving sliding furniture in Coimbatore ,Erode, Ooty, Salem, Tamil Nadu best selling wardrobe " className="hero-space-image"/>
                        <img src={heroImageDoor} alt="sliding door wardrobe in Coimbatore, Erode, Ooty, Salem, Tamil Nadu bedroom furniture" className="hero-space-image-door"/>
                        <img src={heroImageDoor2} alt="Customized sliding door wardrobe bedroom furniture wardrobe with mirror wardrobe designs" className="hero-space-image-door2" />
                    </div>
                
                    <div className="hero-image-bg-right text-right">
                        <div className="hero-text">LAUNCHING</div>
                        <div className="hero-text">A DIGITAL</div>
                        <div className="hero-text">INDIA!</div>

                        <div className="mt-4-5 this">
                            <Link to="/residenceInteriors">
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