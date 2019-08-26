import React, { Component } from "react";
import { bool, func } from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { formattedText } from "../../../translations";

import "./NavBar.css";
import { HOME, LOGIN } from "./Routes";

class BrandNavBar extends Component {
  componentDidMount () {
    this.props.loadUser();
  }

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
      <div className="NavBar">
        <Navbar className="transparent">
          <Navbar.Brand>
            <NavLink to={ HOME } className="Brand">
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
      </div>
    );
  }
};

BrandNavBar.propTypes = {
  isAuthenticated: bool.isRequired,
  loadUser: func.isRequired,
  logout: func.isRequired,
}

export default withRouter(BrandNavBar);
