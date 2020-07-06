import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));


function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' noWrap>
                        Simple Chat Room
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps=state=>{
    console.log(state)
    return{
        
    }
}

export default connect(mapStateToProps)(NavBar)