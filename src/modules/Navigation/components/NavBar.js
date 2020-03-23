import React, { Component } from "react";
import { bool, func } from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { formattedText } from "../../../translations";

import { HOME, LOGIN } from "./Routes";

class BrandNavBar extends Component {
  handleLogout = () => {
    const { logout, history } = this.props;
    const goToLogin = () => history.push(LOGIN);
    logout(goToLogin);
  }

  render () {
    const { isAuthenticated, location: { pathname } } = this.props;
    const { label, href } = pathname !== HOME
      ? { label: formattedText("app.signUp"), href: HOME }
      : { label: formattedText("app.signIn"), href: LOGIN };

    return (
      <header>
        <Navbar bg="black" fixed="top">
          <Navbar.Brand>
            <NavLink to={ HOME } className="brand">
              <h1>{ formattedText("app.name").toUpperCase() }</h1>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { isAuthenticated
              ? (<Button variant="success" onClick={ this.handleLogout }>
                  { formattedText("app.logout") }
                </Button>)
              : (<Nav>
                  <NavLink to={ href }>
                    <Button variant="success">{ label }</Button>
                  </NavLink>
                </Nav>) }
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};

BrandNavBar.propTypes = {
  isAuthenticated: bool,
  logout: func.isRequired,
}

BrandNavBar.defaultProps = {
  isAuthenticated: undefined,
}

export default withRouter(BrandNavBar);
