import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NewsItem from "./newsItem";

import '../styles/news.css';




class News extends Component{
    render() {
        var newsItems = [{ title: "420 e-Hospitals established under Digital India initiative: Ravi Shankar Prasad",k:0},
            { title: "Cyber security course launched to make Digital India initiative safer",k:1},
            { title: "UPI-Help launched on BHIM App for digital payments, All you need to know",k:2},
            { title: "India's digital ecosystem is undergoing a historic evolution: Sandhu",k:3},
            { title: "SBI Payments, NPCI launch solution to enable contactless transactions",k:4},
        ];
        return(
            <div className="fluid-container news-base">
                <div className="newsPageTitle">
                    This week in Digital India
                </div>

                {newsItems.map((item, i) => <NewsItem key={ i } title={item.title} kthing={item.k} />)}
            </div>
        );
    }
}

export default News;