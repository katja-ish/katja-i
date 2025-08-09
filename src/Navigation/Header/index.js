import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <header className="Header">

        <NavLink to="/" className="name">
          <h3>katja ishtokina</h3>
          <h3>product designer</h3>
        </NavLink>

        <h3 className="navigation">
          <NavLink to="/">works</NavLink>
          <NavLink to="/about">about</NavLink>
        </h3>
      </header>
  );
}

export default Header;
