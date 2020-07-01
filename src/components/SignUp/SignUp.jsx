import React, { useState } from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const useStyle = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            minHeight: '30rem',
            width: '100%'
        },
        contents: {
            padding: 20,
        },
        forms: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            maxWidth: 600
        }
    }))
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleEmail = e => {
        console.log(e);
        setEmail({ [e.target.id]: e.target.value });
    }

    const handlePassword = e => {
        console.log(e);
        setPassword({ [e.target.id]: e.target.value });
    }

    const handleUserName = e => {
        console.log(e);
        setUserName({ [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName);
        console.log(email);
        console.log(password);
    }

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <form className={classes.forms} onSubmit={handleSubmit}>
                <Typography variant='h3' component='span'>Simple Chat Room</Typography>
                {/* <div className={classes.contents}>
                    <Typography variant='h5'>Login</Typography>
                </div> */}
                <div className={classes.contents}>
                    <Typography variant='h5'>User Name</Typography>
                    <TextField
                        // variant='outlined'
                        fullWidth
                        onChange={handleUserName}
                        // value={password}
                        type='text'
                        id='username'
                    />
                </div>
                <div className={classes.contents}>
                    <Typography variant='h5'>Email</Typography>
                    <TextField
                        // variant='outlined'
                        fullWidth
                        onChange={handleEmail}
                        // value={email}
                        type='email'
                        id='email'
                    />
                </div>
                <div className={classes.contents}>
                    <Typography variant='h5'>Password</Typography>
                    <TextField
                        // variant='outlined'
                        fullWidth
                        onChange={handlePassword}
                        // value={password}
                        type='password'
                        id='password'
                    />
                </div>
                <div className={classes.contents}>
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        Sign Up
                    </Button>
                </div>
                <Link to='/'>
                    <Button>
                        Back to main page
                    </Button>
                </Link>
            </form>
        </div>
    )
}