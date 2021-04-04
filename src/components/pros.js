import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import '../styles/pros.css';

import AA from "../media/images/AA.jpg"
import A from '../media/images/A.jpg'
import B from '../media/images/B.jpg'
import C from '../media/images/C.jpg'
import D from '../media/images/D.jpg'
import E from '../media/images/E.jpg'

class Pros extends Component{

    render(){
        return(
            <div className="fluid-container pros-container">
                <div className="topTxt">
                    <div className="topTitle">
                        Digital India Projects
                    </div>
                    <div className="topContent">
                        Digital India is a flagship programme of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy.
                    </div>
                </div>

                <div className="hrContainer container"><div className="hr-line"></div></div>
                
                
                <div className="rowA">
                    <div class="card">
                        <img class="card-img-top" src={ AA } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">BETI BACHAO BETI PADHAO</h5>
                            <p class="card-text">The campaign aims at ensuring girls are born, nurtured and educated without discrimination to become empowered citizens of this country.
                            The campaign interlinks National, State and District level interventions with community level action in 100 districts,
                            bringing together different stakeholders for accelerated impact. </p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ B } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">DIGITAL AIIMS</h5>
                            <p class="card-text">The first step in the Digital AIIMS project was taken in January 2015 with the creation of
                            an effective linkage between AIIMS, Unique Identification Authority of India (UIDAI) and the Ministry of Electronics
                            and Information Technology (MeiTY). A unique health identification number for every patient visiting AIIMS was generated on an Aadhar platform.
                           
</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ C } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">CRIME AND CRIMINAL TRACKING NETWORK & SYSTEMS (CCTNS)</h5>
                            <p class="card-text">Crime and Criminal Tracking Network & Systems (CCTNS) is a plan scheme conceived in the light of experience of a non-plan scheme namely - Common Integrated Police Application (CIPA). CCTNS aims at creating a comprehensive and integrated system for enhancing the efficiency and effectiveness of policing.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="rowA">
                    <div class="card">
                        <img class="card-img-top" src={ D } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">CYBER SWACHHTA KENDRA</h5>
                            <p class="card-text">Cyber Swachhta Kendra (Botnet Cleaning and Malware Analysis Centre) is a part of the Government of India's Digital India
                            initiative to create a secure cyber space by detecting botnet infections in India and to notify, enable cleaning and securing systems of end users
                            so as to prevent further infections. It is set up in accordance with the objectives of the ‘National Cyber Security Policy’.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ E } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">BHARAT BROADBAND NETWORK (BBNL)</h5>
                            <p class="card-text">Bharat Broadband Network Limited is a special purpose vehicle set-up under Companies Act by the Government
                            of India with an authorized capital of Rs. 1000 cr. It has been mandated to create the National Optical Fiber Network (NOFN) in India.
                            A total of around 2,50,000 Gram Panchayats spread over 6,600 Blocks and 641 Districts are to be covered.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ A } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">DIGITIZE INDIA PLATFORM</h5>
                            <p class="card-text">Digitize India Platform (DIP) is an initiative of the Government of India under the Digital India Programme to provide digitization
                            services for scanned document images or physical documents for any organization. The aim is to digitize and make usable all the existing content
                            in different formats and media, languages, digitize and create data extracts.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Pros;