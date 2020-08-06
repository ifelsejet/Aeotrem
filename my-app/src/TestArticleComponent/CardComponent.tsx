import React from 'react';
import {Link} from "react-router-dom";
import '../expertSection/Article.css';
import {Box} from '@material-ui/core';
import './CardComponent.css'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

function cutOff(x: string) {
    return x.length > 10 ? x.substring(0, 250) + "..." : x;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: theme.spacing(0.5),
            marginTop: '10%',
            boxShadow: "none",
            backgroundColor: "#fbfbfb",
            width: "370px",
            height: "380px",
            marginBottom: "20px",
            flexDirection: "row",
            fontWeight: "normal",
            textDecoration: 'none'
        },

        box: {
            fontWeight: "normal",
            textDecoration: 'none'
        }

    }),
);


export default function Card(props: any) {
    const classes = useStyles();

    return <Paper component="ul" className={classes.root}>
        <Link to={"/article/" + props.data}>
            <div className="mainBox-Child2">
                <Box display="flex" justifyContent="flex-start" flexWrap="wrap" paddingLeft="20px" paddingTop="20px"
                     paddingBottom="20px" paddingRight="20px" height="0px" width="200px">
                    <img src={props.link} height="150px" width="150px"/>
                </Box>
                <Box display="flex" justifyContent="left" flexWrap="wrap" paddingLeft="180px" paddingRight="20px"
                     fontFamily="Helvetica" height="150px" fontWeight="normal" fontSize="20px" textAlign="left">
                    {props.title}
                </Box>
            </div>
        </Link>
        <Box className={classes.box} display="flex" justifyContent="flex-end" flexWrap="wrap" component="div" textOverflow="ellipis"
             overflow="hidden" paddingLeft="20px" fontFamily="Tahoma" paddingRight="20px" fontWeight="lighter">
            {cutOff(props.description)}
        </Box>
    </Paper>
}