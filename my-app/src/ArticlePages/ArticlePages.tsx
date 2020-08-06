import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import KeyPhrases from "../TextAnalytics/KeyPhrasesArticle/KeyPhrases";
import Voting from "../components/Likes-Voting/Voting";
import ArticleOpinion from "../expertSection/ArticleOpinion";
import RelatedArticle from "../TestArticleComponent/CardComponent";
import SentimentAnalysis from "../TextAnalytics/SentimentAnalysisArticle/SentimentAnalysis";
import VotingSentimentResults from '../components/VotingSentiment/ResultsSentimentVoting';
import VotingSentiment from '../components/VotingSentiment/VotingSentimentAnalysis';
import PullOutBar from "../NavBars/Nav-TopSideBar";
import LikeButton from "../components/Likes-Voting/Likes";
//Other changes

//Styles for the grid
const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
        boxShadow: "none",
        fontWeight: "normal"
    },

    Card: {
        boxShadow: "none",
    },

    Grid: {
        boxShadow: "none",
    },

    paper: {
        padding: theme.spacing(20),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        boxShadow: "none",
    },
}));

function cutOff(x: string) {
    return x.length > 10 ? x.substring(0, 50) + "..." : x;
}

export const ArticlePages = function (props: any) {
    const classes = useStyles();
    window.scrollTo(0, 200);

    //Forms the row of items to be displayed
    function FormRow() {
        return (

            <div style={{display: "flex", flexDirection: "row-reverse", boxShadow: "none"}}>

                <Grid style={{
                    minWidth: "30%",
                    maxWidth: "60%",
                    boxShadow: "none",
                    marginTop: "20px",
                    marginLeft: "-500px",
                    marginRight: "100px"
                }} item>
                    <Paper component="ul" className={classes.root}>
                        <SentimentAnalysis sentiment={props.data}/>
                        <VotingSentiment/>
                        <KeyPhrases phrases={props.data}/>
                    </Paper>
                </Grid>


                <div style={{maxHeight: 200, boxShadow: "none", marginLeft: "50px"}}>
                    <Paper component="ul" className={classes.root} style={{maxWidth: "60%"}}>
                        <div>

                            <PullOutBar position={'-300px'}/>
                            <div style={{display: "flex", flexDirection: "row", paddingBottom: "30px"}}>
                                <Button><img style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginLeft: "20px",
                                    marginRight: "10px",
                                    width: 90,
                                    height: 90
                                }}
                                             src={props.data.ProviderLogo}/></Button>
                                <div>
                                    <h3 style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingTop: "20px",
                                        paddingBottom: "20px",
                                        paddingLeft: "20px"
                                    }}> {props.data.Source}
                                    </h3>
                                </div>
                            </div>
                            <Button>
                                <img style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginLeft: "240px",
                                    marginRight: "160px",
                                    width: 260,
                                    height: 260
                                }}
                                     src={props.data.ImageUrl}/>
                            </Button>

                            <h1 style={{
                                display: "flex",
                                justifyContent: "center",
                                marginLeft: "50px",
                                marginRight: "50px"
                            }}>
                                {props.data.Headline}
                            </h1>


                            <br/>
                            <h3>Date Published: {props.data.DatePublished}</h3>
                        </div>
                        <div style={{boxShadow: "none", marginBottom: "50px", marginTop: "30px", marginRight: "50px"}}>
                            <p>{props.data.Content[0]}</p>
                            <p>{props.data.Content[1]}</p>
                            <p>{props.data.Content[2]}</p>

                        </div>

                        <div style={{boxShadow: "none"}}>
                            <LikeButton message="Likes: " likes={props.data.likes}/>
                        </div>
                    </Paper>


                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                        marginBottom: "60px",
                        boxShadow: "none"
                    }}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{marginRight: "5px", marginLeft: "30px", marginBottom: "30px"}}>

                                <ArticleOpinion id={1} name="Thomas Partake" title="Senior Researcher at TNT"
                                                consensus={58}/>
                            </div>
                            <div style={{marginRight: "5px", marginLeft: "30px", marginBottom: "50px"}}>
                                <ArticleOpinion id={2} name="Bill Jobs" title="Senior Researcher at Harvard"
                                                consensus={67}/>
                            </div>
                        </div>

                        <div style={{marginLeft: "60px"}}><Voting/></div>


                    </div>
                    <div style={{marginLeft: "30px"}}>
                        <h1> Related Articles</h1>
                        <div style={{
                            marginLeft: "-60px",
                            marginTop: "-100px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <RelatedArticle title={cutOff(props.data.Related[0].text1)} link={props.data.ProviderLogo}
                                            data={props.data.Related[0].id} description={props.data.Related[0].text1}/>

                            <RelatedArticle title={cutOff(props.data.Related[1].text1)} link={props.data.ProviderLogo}
                                            data={props.data.Related[1].id} description={props.data.Related[1].text1}/>

                            <RelatedArticle title={cutOff(props.data.Related[2].text1)} link={props.data.ProviderLogo}
                                            data={props.data.Related[2].id} description={props.data.Related[2].text1}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //Returns the Grid of 1 row to be diplayed
    return (
        <div className={classes.root}>
            <Grid container item xs={12}>
                <FormRow/>
            </Grid>

        </div>
    );


}