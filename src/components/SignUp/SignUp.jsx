import React, { useState } from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getFirebase } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

function SignUp(props) {
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
    const firebase=getFirebase();
    const firestore=firebase.firestore();
    const [state,setState]=useState({
        userName:'',
        email:'',
        password:'',
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // firebase.auth().createUserWithEmailAndPassword(
        //     state.email,
        //     state.password
        // ).then(res=>{
        //     return firestore.collection('Users').doc(res.user.uid).set({
        //         userName:state.userName,
        //     })
        // })
        props.signUp(state)
    }

    const classes = useStyle();
    const { authError } = props;
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
                        onChange={handleChange}
                        // value={password}
                        type='text'
                        name='username'
                    />
                </div>
                <div className={classes.contents}>
                    <Typography variant='h5'>Email</Typography>
                    <TextField
                        // variant='outlined'
                        fullWidth
                        onChange={handleChange}
                        // value={email}
                        type='email'
                        name='email'
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
                        name='password'
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
            {authError ? <p>{authError}</p> : null}
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        signUp:newUser=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);