import React from 'react';
import { Link }  from "react-router-dom";
import '../expertSection/Article.css';
import { Box } from '@material-ui/core';
import { newsArticleDB } from '../newsArticlesDB/newsArticlesDB';

function cutOff(x: string) {
    return x.length > 10 ? x.substring(0, 35) + "..." : x;
}

export default function RelatedArticle(props : any){
 
    return <div className="MainBox3" style={{ marginRight: "10%", width: "30%", backgroundImage : `url(${props.link})` , backgroundRepeat : "no-repeat", backgroundSize : "50px 50px", backgroundColor: "#D4C6BD", marginBottom: "9px"}} >

        <Link to={"/article/"+props.data}>
        <div className="mainBox-Child2" >
        <Box display= "flex" justifyContent="flex-start" flexWrap="wrap" >
        </Box>
        <Box paddingTop="30px" display= "flex" justifyContent="center" flexWrap="wrap"  >
            <h2>{cutOff(props.title)}</h2>
            </Box>
        </div>
        </Link>


    </div>

}