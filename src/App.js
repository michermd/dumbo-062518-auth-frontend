import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Login from './components/Login'
import Secret from './components/Secret'
import NotFound from './components/NotFound'

import './App.css';

class App extends Component {

  state = {
    auth: {
      authenticating: true,
      currentUser: {}
    }
  }

  componentDidMount () {
    if (localStorage.getItem('token')) {
      const options = {
        headers : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
        }
      }
      fetch('http://localhost:3000/api/v1/reauth', options)
      .then(resp => resp.json())
      .then(resp => {
        this.handleLoginUser(resp.user)
      })
    } else {
      this.setState((prevState) => {
         return {
           auth: {
             ...prevState.auth,
             authenticating: false
           }
         }
      })
    }
  }

  handleLoginUser = (user) => {
    this.setState((prevState) => {
       return {
         auth: {
           ...prevState.auth,
           authenticating: false,
           currentUser: user
         }
       }
    })
  }

  handleLogout = () => {
    this.setState((prevState) => {
       return {
         auth: {
           ...prevState.auth,
           currentUser: {}
         }
       }
    })
    localStorage.clear()
  }

  render() {
    const loggedIn = !!this.state.auth.currentUser.id
    return (
      <Fragment>
      <NavBar
        username={this.state.auth.currentUser.username}
        loggedIn={loggedIn}
        handleLogout={this.handleLogout}
      />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" component={() => <Profile loggedIn={loggedIn}/>} />
        <Route exact path="/login" render={() => <Login loggedIn={loggedIn} handleLoginUser={this.handleLoginUser}/>} />
        <Route exact path="/my_secret" render={() => <Secret loggedIn={loggedIn} />} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    );
  }
}

export default App;
