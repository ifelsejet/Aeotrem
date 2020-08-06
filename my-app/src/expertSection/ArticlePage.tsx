import React from 'react';
import './Articlepage.css'
import AricleComponent from './ArticleComponent'


type Article = {
    title : String,
    link : String
}

export default function ArticlePage(props : any){
    const [article , setArticle] = React.useState<any>([
        {title : "Hello" , link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'},
        {title : "Hello" , link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'},
        {title : "Hello" , link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'},
        // {title : "Hello" , link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'},
        // {title : "Hello" , link : 'https://image.shutterstock.com/image-photo/online-news-on-mobile-phone-260nw-1508530010.jpg'}
    ])
    return (
        <div className="container">
            <h1>More Articles related to this topic</h1>
        <div className="ArticleContainer">
            {article.map((data : Article) => {
                console.log(data)
                return (<AricleComponent title={data.title} link={data.link} />)
            })}
        </div>
        </div>
    )
}