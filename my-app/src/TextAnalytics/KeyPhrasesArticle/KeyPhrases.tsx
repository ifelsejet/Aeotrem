import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

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
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    }),
);


export default function ChipsArray(props : any) {
    const classes = useStyles();
    return (
        <Paper component="ul" className={classes.root}>
            {props.phrases.KeyPhrases.map(( data: any) => {
                return (
                    <li>
                        <Chip color="secondary"
                            label={data}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}