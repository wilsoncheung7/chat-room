import React from 'react';
import { makeStyles, Typography, TextField, } from '@material-ui/core';

export default function Main() {
    const useStyle = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            minHeight: '30rem',
            width:'100%'
        },
        contents: {
            padding: 20,
        }
    }))
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <form style={{ position: 'absolute', top: '50%' }}>
                <Typography variant='h3' component='span'>Simple Chat Room</Typography>
                <div className={classes.contents}>
                    <Typography variant='h5'>Login</Typography>
                </div>
                <div className={classes.contents}>
                    <Typography variant='h5'>Email</Typography>
                    <TextField
                    variant='outlined'
                    fullWidth
                     />
                </div>
                <div className={classes.contents}>
                    <Typography variant='h5'>Password</Typography>
                    <TextField
                    variant='outlined'
                    fullWidth
                     />
                </div>
                <Typography>Sign up</Typography>
            </form>
        </div>
    )
}