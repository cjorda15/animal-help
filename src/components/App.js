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
        <NavBar user={this.props.user} />
        <Switch>
          <Route
            path="/signup"
            render={({ history }) => <SignUp history={history} />}
          />
          <Route
            path="/login"
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

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export default connect()(App);
