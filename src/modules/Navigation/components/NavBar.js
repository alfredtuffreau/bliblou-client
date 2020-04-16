import React, { Component } from "react";
import { bool, func } from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { HOME, LOGIN } from "./Routes";

class BrandNavBar extends Component {
  handleLogout = () => {
    const { logout, history } = this.props;
    logout(history);
  }

  render () {
    const { isAuthenticated, location: { pathname } } = this.props;
    const { label, href } = pathname !== HOME
      ? { label: "Créer un compte", href: HOME }
      : { label: "S'identifier", href: LOGIN };

    return (
      <header>
        <Navbar bg="light" fixed="top">
          <Navbar.Brand as={ NavLink } to={ HOME }>{ "Le bliblou".toUpperCase() }</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { isAuthenticated
              ? (<Button variant="success" 
                         onClick={ this.handleLogout }
                         onMouseDown={ e => e.preventDefault() }>
                  Se déconnecter
                </Button>)
              : (<Nav>
                  <NavLink to={ href }>
                    <Button variant="success" 
                            onMouseDown={ e => e.preventDefault() }>
                      { label }
                    </Button>
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
