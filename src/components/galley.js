import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles/gallery.css';

import A from "../media/images/cols/1.jpg"
import B from "../media/images/cols/2.jpg"
import C from "../media/images/cols/3.jpg"
import D from "../media/images/cols/4.jpg"
import E from "../media/images/cols/5.jpg"
import F from "../media/images/cols/6.jpg"
import G from "../media/images/cols/7.jpg"
import H from "../media/images/cols/8.jpg"
import I from "../media/images/cols/9.jpg"
import J from "../media/images/cols/10.jpg"
import K from "../media/images/cols/11.jpg"
import L from "../media/images/cols/12.jpg"


class Gallery extends Component{
    render() {
        return(
            <div className="fluid-container gallery-base">
                <div className="gallery-title">A peek into the future</div>
                <div className="imagesContainer">
                    <div className="colA">
                        <div className="imgco"><img src={A} alt="" /></div>
                        <div className="imgco"><img src={B} alt="" /></div>
                        <div className="imgco"><img src={C} alt="" /></div>
                        <div className="imgco"><img src={ D } alt=""/></div>
                    </div>
                    <div className="colA">
                        <div className="imgco"><img src={E} alt="" /></div>
                        <div className="imgco"><img src={F} alt="" /></div>
                        <div className="imgco"><img src={G} alt="" /></div>
                        <div className="imgco"><img src={ H } alt=""/></div>
                    </div>
                    <div className="colA">
                        <div className="imgco"><img src={I} alt="" /></div>
                        <div className="imgco"><img src={J} alt="" /></div>
                        <div className="imgco"><img src={K} alt="" /></div>
                        <div className="imgco"><img src={ L } alt=""/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;