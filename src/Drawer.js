import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { useMediaQuery } from 'react-responsive'


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
    },
    Logos: {
        maxWidth:200,
        minWidth:50,
        height:50,
        position:"absolute"
    }

}));


const Drawer = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 600px)' })

    return (
        <Grid item container xs={2} direction="column" >

            {isLargeScreen ? 
            <DrawerLargeScreen />
            :
            <DrawerSmallScreen />
            }
        </Grid>

    )

}


const DrawerLargeScreen = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders" >
                <ListItem >
                    <ListItemIcon className={classes.Logos}>
                        <img src={logos} style={{width:"100%", height:"100%", }} alt="logos"></img>
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
        </div>
    )
}

const DrawerSmallScreen = () => {
    const classes = useStyles();
    return (
        <div>
        <List component="nav" aria-label="main mailbox folders" >
            <ListItem >
                <ListItemIcon className={classes.Logos}>
                    <img src={logos} alt="logos" style={{ height:"100%",width:"100%" }}></img>
                </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem>
                <Link to="/" className={classes.link} >
                    <ListItemIcon >
                        <FilterNoneIcon />
                    </ListItemIcon>
                </Link>
            </ListItem>
        </List>
        <ListItem>
            <Link to="/new" className={classes.link} >
                <ListItemIcon>
                    <LibraryAddIcon style={{ alignItems: "left" }} />
                </ListItemIcon>
            </Link>
        </ListItem>
        <Divider />
    </div>
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
