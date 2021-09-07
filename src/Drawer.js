import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Link  from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import logos from './logos.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 100,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    navItem: {
        fontSize: 32,
        color: "black",
    },
    link: {
        textDecoration: "none",
    }
}));


const Drawer = () => {
    const classes = useStyles();
    return (
        <Grid item container xs={2} direction="column" >
            <List component="nav" aria-label="main mailbox folders" >
                <ListItem >
                    <ListItemIcon>
                        <img src={logos} alt="logos" style={{ height: 40, width: 180, marginTop: 0 }}></img>
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="/" className={classes.link} >
                        <ListItemIcon >
                            <FilterNoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tüm Kayıtlar" className={classes.navItem} />
                    </Link>
                </ListItem>
            </List>
            <ListItem>
                <Link to="/new" className={classes.link} >
                    <ListItemIcon>
                        <LibraryAddIcon style={{ alignItems: "left" }} />
                    </ListItemIcon>
                    <ListItemText primary="Yeni Kayıt" className={classes.navItem} />
                </Link>
            </ListItem>
            <Divider />
        </Grid>

    )

}



export default Drawer;




//  <>
// <Grid item>
// <p>This is drawer
// </p>
// </Grid>

// <Grid item>
// <p>This is drawer
// </p>
// </Grid>
// </> 
