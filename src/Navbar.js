import React from 'react';
import { Grid, IconButton, Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouteMatch } from 'react-router';


const useStyles = makeStyles((theme) => ({
    appBarItem: {
        flex: 1,
    }
}));


const ConditionalTypo = () => {
    const match = useRouteMatch();

    if (match.url === "saxdor-records/"){
        return <Typography style={{flex:1}} >
            Tüm Kayıtlar
        </Typography>
    }else if (match.url === "saxdor-records/new") {
        return <Typography style={{flex:1}} >
            Yeni Kayıt
        </Typography>
    }else 
    return <h2> Hello </h2>
}



const Navbar = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <AppBar position="static">
                <Toolbar>
                <ConditionalTypo/>
                    <IconButton color="inherit" >
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Navbar;