import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import A from "../media/images/news1.jpeg"
import B from "../media/images/news2.jpeg"
import C from "../media/images/news3.jpeg"
import D from "../media/images/news4.jpeg"
import E from "../media/images/news5.jpeg"


import '../styles/news.css';

class NewsItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        var images = [A, B, C, D, E];
        return(
            <div className="fluid-container item-container">
                <div className="newsItem-img">
                    <img src={ images[this.props.kthing]} alt=""/>
                </div>
                <div className="newsP2">
                    <div className="newsItem-title">
                        {this.props.title}
                    </div>
                    <div className="newContent">
                        { this.props.content}
                    </div>
                </div>

            </div>
        );
    }
}

export default NewsItem;