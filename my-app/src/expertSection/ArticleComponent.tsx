import React from 'react';
import "./Article.css"



export default function Card(props : any){
    return <div style={{backgroundImage : `url(${props.link ? props.link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'})` , backgroundRepeat : "no-repeat"}} className="MainBox">
        <div className="mainBox-Child">
            <h1>{props && props.title}</h1>
        </div>
    </div>
}