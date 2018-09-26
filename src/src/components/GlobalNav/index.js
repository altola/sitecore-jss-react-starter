import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/jss-logo.png';

const GlobalNav = (props) => (
    <div className="nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <NavLink to="/">
          <img src={logo} height={50} alt="Sitecore" />
        </NavLink>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {props.fields.navLinks.map((navLink, index) =>
          <NavLink key={index} to={navLink.fields.link.value.href}>
            {navLink.fields.title ?
              navLink.fields.title.value
              : navLink.fields.link.value.text}
          </NavLink>)}
      </nav>
    </div>
  );

export default GlobalNav;