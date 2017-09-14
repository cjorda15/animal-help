import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import SignUp from './SignUp';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route
            path="/signup"
            render={({ history }) => <SignUp history={history} />}
          />
          <Route
            path="/"
            render={({ history }) => <Main history={history} />}
          />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
