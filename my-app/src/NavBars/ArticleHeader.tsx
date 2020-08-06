import React from 'react';
import "./ArticleHeader.css"
import logo from "./aetrom off.png"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            boxShadow: "none",
        },
        flex: {
            boxShadow: "none",
        }

    }),
);

export default function Header(props: any) {
    const classes = useStyles();
    return <Paper component="ul" className={classes.root}>
        <Paper className={classes.flex}>
            <div>
                <img src={logo} height="120" width="160" alt=""/>
            </div>
        </Paper>
    </Paper>
}
