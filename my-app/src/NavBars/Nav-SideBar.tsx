import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { shadows } from '@material-ui/system';


/*
 Author: Korre D. Henry

 Puprose: This file exports a "Topics Menu" for the external Topic Page Component.
 For every Topic in the predefined list of Topics as strings, this component will link
a <a> tag path varying on the particular topic link clicked.
*/


const useStyles = makeStyles({
    root: {
        minWidth: 280,
        boxShadow: "none",
    },

    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },

    title: {
        fontSize: 14
    },

    pos: {
        marginBottom: 12
    }

});

export default function NavBars() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div style={{padding: "2px", textAlign: "center"}}>
                <h1> Topics </h1>
                <List>
                    {[
                        "Latest",
                        "Finance",
                        "Politics",
                        "International",
                        "Technology",
                        "Sports"
                    ].map((text, index) => (
                        <Link to={`/topic/${text}`}>
                            <ListItem>
                                <Button>
                                    <h3> {text} </h3>
                                </Button>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>

        </Card>
    );
}