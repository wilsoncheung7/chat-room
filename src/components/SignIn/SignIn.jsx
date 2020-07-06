import React, { useState } from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import firebase from 'firebase'

function SignIn(props) {
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

    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(email);
        // console.log(password);
        props.signIn(state);
    }
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const classes = useStyle();
    const { authError } = props;
    console.log(props);
    return (
        <div className={classes.root}>
            <form className={classes.forms} onSubmit={handleSubmit}>
                <Typography variant='h3' component='span'>Simple Chat Room</Typography>
                {/* <div className={classes.contents}>
                    <Typography variant='h5'>Login</Typography>
                </div> */}
                <div className={classes.contents}>
                    <Typography variant='h5'>Email</Typography>
                    <TextField
                        // variant='outlined'
                        fullWidth
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        Login
                    </Button>
                </div>
                <Link to={ROUTES.SIGN_UP}>
                    <Button>
                        Sign up
                    </Button>
                </Link>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)