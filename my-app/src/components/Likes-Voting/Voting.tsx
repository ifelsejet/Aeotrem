/*  Author: Sofia Barry

Voting.tsx will be used to enable a voting feature on every Article Page. 
This file contains a voting container with buttons "yes,""maybe," and "no" 
that enable the user to expres their opinions by voting on a certain article.
This  file contains a function showResults that renders the Voting Results
container located in VotingResults.tsx once either button is clicked.

*/

import React from 'react';
import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import VotingResults from './VotingResults';

interface VotingProps {
    message1: string
    message2: string
    children?: any
}

const VotingContainer = (props: VotingProps) => (


    <Box
        paddingLeft={10}
        paddingRight={7}
        border={8}
        borderRadius={16}
        borderColor="primary.main"
        display="flex"
        justifyContent="center"
        maxWidth="100%"
        boxShadow={4}
        bgcolor="white">
        <div>

            <h2>{props.message1}</h2>
            <p>{props.message2}</p>
            <p><Box display="flex" justifyContent="space-evenly">
                {props.children}
            </Box></p>
        </div>
    </Box>

)

class Voting extends React.Component {
    render() {
        return (
            <div>
                <div id="buttons" style={{display: "block", minWidth: "400px"}}>
                    <VotingContainer message1="Let us hear your voice!"
                                     message2="Do you think that this article is trustworthy?">
                        <Button onClick={this.showResults} variant="contained" color="primary">Yes</Button>
                        <Button onClick={this.showResults} variant="contained" color="primary">Maybe</Button>
                        <Button onClick={this.showResults} variant="contained" color="primary">No</Button>
                    </VotingContainer>
                </div>
                <div id="results" style={{display: "none"}}>
                    <VotingResults/>
                </div>
            </div>
        );
    };


    showResults() {
        const button = document.getElementById("buttons");
        const results = document.getElementById("results");

        if (button) {
            button.style.display = "none";
            if (results) {
                results.style.display = "block";
            }
        }
    }
}


export default Voting
