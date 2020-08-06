import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./ArticleOpinion.css"

interface OpinionProps{
    id?: number
    name: string
    title: string
    consensus?: number
}

export default function ArticleOpinion(props : OpinionProps){

    return (
        <div className="ArticleOpinionBox">
            <div>
                <div className="d-flex">
                    <div className="circleBox">
                        <AccountCircleIcon style={{ fontSize: 50, marginRight:"8px"}}/>
                    </div>
                    <div>
                        <h3 className="margin-1">{props.name}<span className="bg-green">	&#10004;</span></h3>
                        <p className="margin-1">{props.title}</p>
                    </div>
                </div>
                <div className="opinionText">
                    <p className="margin-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum dolore nostrum deserunt tempora voluptates qui sequi esse! Esse totam exercitationem quo atque possimus ullam impedit aliquid veritatis deleniti nobis?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatibus voluptas sapiente laborum aliquid quo facilis unde ipsa suscipit, voluptatum dicta magnam exercitationem placeat. Consequatur eius delectus rem quos. Ipsam?
                    </p>
                    <br></br>
                    <p className="margin-1"><b>Source:</b></p>
                    <p className="margin-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <br/>
                    <p className="margin-1"><b>Expert Consensus:</b></p>
                    <p className="margin-1">{props.consensus}% of our experts agree with this view.<br/></p>
                    
                </div>
               
            </div>
        </div>
    )
}