import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import "./BrandNavBar.css";
import { formattedText } from "../translations";

class BrandNavBar extends Component {
  render () {
    const { home, isAuthenticated, handleLogout, redirect: { href, label } } = this.props;

    return (
      <div className="BrandNavBar">
        <Navbar className="transparent">
          <Navbar.Brand>
            <NavLink to={ home } activeStyle={{ textDecoration: "none", color: "black" }}>
              <h1>{ formattedText("app.name").toUpperCase() }</h1>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { isAuthenticated
              ? <Button variant="success" onClick={ handleLogout }>{ formattedText("app.logout") }</Button>
              : (<Nav>
                  <NavLink to={ href }>
                    <Button variant="success">{ label }</Button>
                  </NavLink>
                </Nav>) }
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

BrandNavBar.propTypes = {
  home: string.isRequired,
  redirect: shape({
    label: string.isRequired,
    href: string.isRequired,
  }),
  isAuthenticated: bool.isRequired,
  handleLogout: func.isRequired,
}

export default BrandNavBar;
