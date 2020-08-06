import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import SentimentAnalysisLatestNews from "./SentimentAnalysisLatestNews";


const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        shadowBox: "none",

    },
}));


export default function VisualizePage(props : any) {
    const classes = useStyles();
    return (
        <Paper component="ul" className={classes.root}>
           <SentimentAnalysisLatestNews />
        </Paper>
    );
}