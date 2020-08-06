/*  Author: Sofia Barry 

Likes.tsx contains a function Likes that renders the LikeButton class. 
This file will be used to enable a liking feature on every Article to 
allow the user to share their opinion. 

*/

import React from 'react';
import Button from '@material-ui/core/Button';
import { newsArticleDB } from "../../newsArticlesDB/newsArticlesDB";
import FavoriteIcon from '@material-ui/icons/Favorite';


interface LikesState{
    counter: number
}

interface LikesProps {
    message: string
    likes: number
}

class LikeButton extends React.Component <LikesProps, LikesState> {

    constructor (props: LikesProps) {
        super(props); 
       this.state = {counter: props.likes}; 
 
        
    }

    render() {
        return(
            <Button onClick= {this.increment} variant="contained" color="secondary">
               <FavoriteIcon/>
               {this.props.message}
               {this.state.counter}
            </Button>
        )
    }

    private increment = () => {
        this.setState(
            state => ({counter: this.state.counter + 1})
          );
       };
}

export default LikeButton