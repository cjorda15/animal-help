import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LargeNavBar extends Component {
  loggedIn() {
    return [
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={0}
        to={'/'}
      >
        Home
      </NavLink>,
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={1}
        to={'/'}
      >
        Potential Pets
      </NavLink>,
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={2}
        to={'/'}
      >
        Logoff
      </NavLink>
    ];
  }

  loggedOff() {
    return [
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={0}
        to={'/'}
      >
        Home
      </NavLink>,
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={1}
        to={'/signup'}
      >
        Sign Up
      </NavLink>,
      <NavLink
        className="lrg-nav-link"
        activeClassName="selected"
        key={2}
        to={'/login'}
      >
        login
      </NavLink>
    ];
  }

  render() {
    return (
      <div id="lrg-nav-bar">
        {this.props.user ? this.loggedIn() : this.loggedOff()}
      </div>
    );
  }
}

export default LargeNavBar;
