import React from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import AddBoxIcon from '@material-ui/icons/AddBox';
import pullBarIcon from "../images/sideBarIcon.png";
import {isPropertySignature} from "typescript";


//<img height="200" width="200" src={logo} />


const useStyles = makeStyles({
    root: {
        boxShadow: "none",
    },

    list: {
        width: 250
    },

    fullList: {
        width: "auto"
    }
});

export default function NavBars(props: any) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });


    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: any) => (
        <div
            className={clsx(classes.list, {})}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {[
                    "Latest",
                    "Finance",
                    "Politics",
                    "International",
                    "Technology",
                    "Sports"
                ].map((text, index) => (

                    <Link to={`/topic/${text}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
                        <ListItem button key={index}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
        </div>
    );


    return ( //Pass in props for the margin left, since different per page.
        <div style={{marginRight: "100%", flexGrow: 1, display: "flex", flexDirection: "row"}}>
            <React.Fragment key={'left'}>
                <div style={{marginLeft: "-270px"}}><Button onClick={toggleDrawer('left', true)}> <img
                    src={pullBarIcon}/></Button></div>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
