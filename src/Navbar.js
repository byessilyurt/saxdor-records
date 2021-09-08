import React from 'react';
import { Grid, IconButton, Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouteMatch } from 'react-router';
import { useMediaQuery } from 'react-responsive'



const useStyles = makeStyles(() => ({
        appbarSM: {
            display:"none",
        },
        appbarLG: {
            width: "100%",
            float:"right",
        }
}));


const ConditionalTypo = () => {
    const match = useRouteMatch();

    if (match.url === "/"){
        return <Typography style={{flex:1}} >
            Tüm Kayıtlar
        </Typography>
    }else if (match.url === "/new") {
        return <Typography style={{flex:1}} >
            Yeni Kayıt
        </Typography>
    }
}



const Navbar = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 600px)' })

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <AppBar position="static" className={isSmall ? classes.appbarSM : classes.appbarLG}>
                <Toolbar >
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