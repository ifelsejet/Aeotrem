import React from 'react';
import '../expertSection/Article.css'
import ArticleComponent from '../TestArticleComponent/CardComponent';
import './articlesList.css'
import { GridList, Box } from '@material-ui/core';
import classes from '*.module.css';


export default function TestArticlePage(props: any) {
    return (
        <Box display="flex" flexWrap="wrap" width={1}>
            <div className="ArticleContainer">
                <ul>
                    <Box display="flex"  flexWrap="wrap">
                    {props.articles.map((data: any) => {
                        if (data.TopicName === props.name) {
                            return (
                                <ArticleComponent title={data.Headline} link={data.ImageUrl} data={data.ArticleID}
                                                  description={data.description}/>

                            )
                        }
                    })}
                    </Box>
                </ul>
            </div>
            </Box>
    )

}