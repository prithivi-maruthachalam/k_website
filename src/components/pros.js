import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import '../styles/pros.css';

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
                        <img class="card-img-top" src={ A } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">View More</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ B } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ C } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
                            
                            <button class="btn-primary btn-B">View More</button>
                        </div>
                    </div>

                </div>

                <div className="rowA">
                    <div class="card">
                        <img class="card-img-top" src={ D } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ E } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
                            <Link to="/workInProgress">
                                <button class="btn-primary btn-B">View More</button>
                            </Link>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src={ A } alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the
                            card title and make up the bulk of the card's content.</p>
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