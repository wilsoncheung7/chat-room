import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import NavBar from '../NavBar';
import Main from '../Main';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Main} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
