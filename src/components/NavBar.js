import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class NavBar extends Component {
  loggedIn() {
    return [
      <NavLink className="nav-link" activeClassName="selected" key={0} to={'/'}>
        Home
      </NavLink>,
      <NavLink className="nav-link" activeClassName="selected" key={1} to={'/'}>
        Potential Pets
      </NavLink>,
      <NavLink className="nav-link" activeClassName="selected" key={2} to={'/'}>
        Logoff
      </NavLink>
    ];
  }

  loggedOff() {
    return [
      <NavLink className="nav-link" activeClassName="selected" key={0} to={'/'}>
        Home
      </NavLink>,
      <NavLink
        className="nav-link"
        activeClassName="selected"
        key={1}
        to={'/signup'}
      >
        Sign Up
      </NavLink>,
      <NavLink
        className="nav-link"
        activeClassName="selected"
        key={2}
        to={'/login'}
      >
        Login
      </NavLink>
    ];
  }

  render() {
    return (
      <div id="outer-container">
        <Menu right>
          {this.props.user ? this.loggedIn() : this.loggedOff()}
        </Menu>
      </div>
    );
  }
}

export default NavBar;
