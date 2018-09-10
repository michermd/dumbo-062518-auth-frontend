import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Login from './components/Login'
import Secret from './components/Secret'
import NotFound from './components/NotFound'

import './App.css';

class App extends Component {


  render() {
    return (
      <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/my_secret" component={Secret} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    );
  }
}

export default App;
