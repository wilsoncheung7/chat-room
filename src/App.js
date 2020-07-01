import React from 'react';
import {Route,Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={SignIn}/>
        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
