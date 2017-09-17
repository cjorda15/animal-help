import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class NavBar extends Component {
  loggedIn() {
    return [
      <NavLink className="nav-link" activeClassName="selected" to={'/'}>
        home
      </NavLink>,
      <NavLink className="nav-link" activeClassName="selected" to={'/'}>
        logoff
      </NavLink>
    ];
  }

  loggedOff() {
    return [
      <NavLink className="nav-link" activeClassName="selected" to={'/'}>
        home
      </NavLink>,
      <NavLink className="nav-link" activeClassName="selected" to={'/signup'}>
        sign up
      </NavLink>,
      <NavLink className="nav-link" activeClassName="selected" to={'/login'}>
        login
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
