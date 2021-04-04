import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NewsItem from "./newsItem";

import '../styles/news.css';




class News extends Component{
    render() {
        var newsItems = [{
            title: "420 e-Hospitals established under Digital India initiative: Ravi Shankar Prasad",
            k: 0,
            cont: "As many as 420 e-Hospitals have been established across the country as part of the Central government's Digital India initiative, Union Minister Ravi Shankar Prasad informed on Wednesday."},
            
            {
                title: "Cyber security course launched to make Digital India initiative safer", k: 1,
                cont: "To make the Government’s Digital India initiative safer and robust in rural India, the Common Service Centre (CSC), an SPV under the Ministry of Electronics and IT, has launched a cyber security course in collaboration with French institute -- Ecole Superieure Robert de Sorbon."
            },
            
            {
                title: "UPI-Help launched on BHIM App for digital payments, All you need to know", k: 2,
                cont: "The National Payments Corporation of India (NPCI) on Monday launched the ‘UPI-help’ on BHIM UPI app as a part of Digi-Help stack by NPCI, to address any issues and complaints that users might have during UPI transactions."
            },
            
            {
                title: "India's digital ecosystem is undergoing a historic evolution: Sandhu", k: 3,
                cont: "The whole B2B (business-to-business), B2C (business-to-consumer) ecosystem, is undergoing a historic evolution, backed by a thriving startup culture."
            },
            
            {
                title: "SBI Payments, NPCI launch solution to enable contactless transactions", k: 4,
                cont: "SBI Payments and National Payments Corporation of India (NPCI) have joined hands to launch RuPay SoftPoS that will enable merchants to make contactless transactions of up to Rs 5,000 through their smart phones"
            },
        ];
        return(
            <div className="fluid-container news-base">
                <div className="newsPageTitle">
                    This week in Digital India
                </div>

                {newsItems.map((item, i) => <NewsItem key={i} title={item.title} kthing={item.k} content={ item.cont} />)}
            </div>
        );
    }
}

export default News;