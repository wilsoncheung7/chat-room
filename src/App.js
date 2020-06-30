import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {Route,Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Main}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
