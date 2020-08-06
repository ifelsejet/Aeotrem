
/*  Author: Sofia Barry 

ResultsSentimentVoting.tsx contains a ResultsContainer that renders a pie chart
and proper legends to show the user what other people voted on the sentiment analysis of an article.
This file is rendered inside VotingSentimentAnalysis.tsx and is conditioned by the function 
showResults within the same VotingSentimentAnalysis.tsx file.

*/

import React from 'react';
import { Box } from '@material-ui/core';
import { PieChart } from 'react-minimal-pie-chart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
//import { newsArticleDB } from "../../newsArticlesDB/newsArticlesDB";

interface ResultsProps {
    message: string
    yesVotes?: number
    maybeVotes?: number
    noVotes?: number
    children?: any

}

const ResultsSentimentContainer = (props: ResultsProps)  => (

    <div >
        {/* <h2>{props.message}</h2> */}
        <p style={{display: "flex", justifyContent:"center"}}>
            Do you agree with the sentiment analysis?</p>
        <p> <PieChart
            data={[
                { title: 'Yes', value:30, color: '#27e398' }, 
                { title: 'No', value: 10, color: '#e32727' },
            ]}
            startAngle={180}
            lengthAngle={180}
            viewBoxSize={[100, 50]}
            style={{ height: '60px' }}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
                fontSize: '10px',
                fontFamily: 'sans-serif',
              })}
              radius={42}
              labelPosition={112}
            />
            {/* <FiberManualRecordIcon htmlColor= '#27e398' ></FiberManualRecordIcon>Yes
            <FiberManualRecordIcon htmlColor= '#e32727' ></FiberManualRecordIcon>No */}
            </p>
               
    </div>
       
)

function  VotingSentimentResults() {
    return (
        <ResultsSentimentContainer message= "This is what people think...">
        </ResultsSentimentContainer>
    )
}

export default VotingSentimentResults
