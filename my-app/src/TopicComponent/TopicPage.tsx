/*
Founding Editor/Author: Korre D. Henry

Purpose: This file is a TopicPage component to be used in this project. This file exports
a function that will render a blank page with the following Topic item that it recieves
as parameters.

Usage Locally:
In order for this component to render different data you must call in different
parameters from the props parameter given. For example, if one wants to render the
article headline data one might use: { props.headline } in order to display this data.

Recommended Usage: This component's creation was intended to be used as a page layout for
different "Article" components as well as which category they belong to.

    Example Rendering: 

           { Politics }           -- This is the headline.

          { Article Component 1 }    -- This is a article component.

          { Article Component 2 }

          { Article Component 3 }

Usage Externally:
As it recommened to pass in props relating to a Topic name and a list of articles, this 
can be achieved using the following format after import this TopicPage to the external file:

<TopicPage topic={topicString} articleList { [ Article1, Article2 ]}> </TopicPage>

Note that the above passed in props are only the topic to be displayed and the list
of articles to be displayed as well.

*/

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import NavBars from "../NavBars/Nav-SideBar";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import logo from "../NavBars/aetrom off.png";

/*This function will be used as a hook for the TopicPage function below.
This function returns the configurations for the Material UI styling of
the TopicPage Component below.
*/
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        boxShadow: "none"

    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxHeight: "320px",
        boxShadow: "none"
    },
}));

/*
This function takes in props as parameters, props is an object that will contain
attributes of the objects that a passed in. This function should only maintain props
objects relating to the article and the topic name for this page.
*/
export default function TopicPage(props: any) {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div style={{
                            marginRight: "100%",
                            marginTop: "0",
                            marginLeft: "-32px",
                            display: "flex",
                            flexDirection: "column"
                        }}>

                            <div style={{maxHeight: "50px", maxWidth: "40px", marginBottom: "1px"}}>
                            <Link to={'/Home'}><Button> <img height="175" width="175" src={logo}/></Button> </Link>
                            </div>
                            <div style={{marginLeft: "955px", display: "flex", flexDirection:"row"}}>
                                <Link to={'/Home'}> <div><Button> <h1>Home</h1> </Button></div>
                                </Link>
                                <Link to={'/Visualize'}>
                                <div style={{paddingLeft: "50px"}}><Button> <h1>Visualize</h1> </Button> </div>
                                </Link>
                            </div>

                        </div>
                        <h1>{props.topic}</h1>
                    </Paper>
                </Grid>
            </Grid>

        </div>


    );
}