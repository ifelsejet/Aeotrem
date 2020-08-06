/*  Author: Sofia Barry

VotingSentimentAnalysis.tsx will be used to enable a voting feature on every Article Page. 
This file contains a voting container with buttons "yes" and "no" 
that enable the user to expres their opinions by voting on whether or not they agree 
with the sentiment analysis. This  file contains a function showVotingResults that renders the Voting Results
container located in ResultsSentimentVoting.tsx once either button is clicked.

*/

import React from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import VotingSentimentResults from './ResultsSentimentVoting';


interface VotingProps {
    message: string
    children: any
}

const VotingContainer = (props: VotingProps) => (
    
        <div >
                <p style={{display:"flex", justifyContent: "center"}}>{props.message}</p>
                <p><Box display="flex" justifyContent="space-evenly"> 
                {props.children} 
                </Box></p>
        </div>
     
) 

class VotingSentiment extends React.Component {
    render() {
        return (
            <div >
                <div id="SentimentButtons" style={{display: "block"}} > 
                    <VotingContainer message="Do you agree with the sentiment analysis?">
                    <Button onClick={this.showVotingResults} variant="contained" color="primary">Yes</Button> 
                    <Button onClick={this.showVotingResults} variant="contained" color="primary">No</Button>
                    </VotingContainer>
                </div> 
                <div id="SentimentResults" style={{display: "none"}} >
                    <VotingSentimentResults/>
                </div>
            </div>
        );
      };


    showVotingResults() {
        const SentimentButtons = document.getElementById("SentimentButtons");
        const SentimentResults = document.getElementById("SentimentResults");

        if(SentimentButtons){
            SentimentButtons.style.display = "none";
            if(SentimentResults){
                SentimentResults.style.display = "block";
            }
        }
    }
    // id="SentimentResults" style={{display: "none"}}
    // onClick={this.showVotingResults} 
    
}     

export default VotingSentiment

