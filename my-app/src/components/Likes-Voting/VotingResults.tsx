
/*  Author: Sofia Barry 

VotingResults.tsx contains a ResultsContainer that renders a pie chart
and proper legends to show the user what other people voted on an article.
This file is rendered inside Voting.tsx and is conditioned by the function 
showResults within the same Voting.tsx file.

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

const ResultsContainer = (props: ResultsProps)  => (

    <Box 
        paddingLeft={10} 
        paddingRight={7} 
        border={8} 
        borderRadius={16} 
        borderColor="primary.main" 
        display="flex" 
        justifyContent="center"  
        minWidth="400px"
        minHeight="728px" 
        boxShadow={3}
        bgcolor="white">  
    <div >
        <h2>{props.message}</h2>
        <p>Do you think that this article is trustworthy?</p>
        <p> <PieChart
            data={[
                { title: 'Yes', value:30, color: '#27e398' }, //In later iterations value will contain Votes from newsArticleDB.tsx
                { title: 'Maybe', value: 15, color: '#e3dd27' },
                { title: 'No', value: 10, color: '#e32727' },
            ]}
            lineWidth={20}
            paddingAngle={18}
            rounded
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%' }
            labelStyle={(index) => ({
                fontSize: '5px',
                fontFamily: 'monospace',
            })}
            labelPosition={60}
            /></p>
            <div style={{display:"flex", justifyContent:"space-between"}}>
               <div><FiberManualRecordIcon htmlColor= '#27e398' ></FiberManualRecordIcon>Yes</div>
               <div><FiberManualRecordIcon htmlColor= '#e3dd27' ></FiberManualRecordIcon>Maybe</div>
               <div><FiberManualRecordIcon htmlColor= '#e32727' ></FiberManualRecordIcon>No</div>
             </div>
               
    </div>
    </Box>     
)

function  VotingResults() {
    return (
        <ResultsContainer message= "This is what people think...">
        </ResultsContainer>
    )
}

export default VotingResults
