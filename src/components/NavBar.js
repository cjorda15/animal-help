import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink className="nav-link" activeClassName="selected" to={'/'}>
        home
      </NavLink>
      <NavLink className="nav-link" activeClassName="selected" to={'/signup'}>
        sign up
      </NavLink>
    </nav>
  );
};

export default NavBar;
