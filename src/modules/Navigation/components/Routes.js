import React, { Component } from "react";
import { arrayOf, shape, string, bool, func } from "prop-types";
import { Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import AppliedRoutes from "./AppliedRoutes";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";

export const HOME = "/";
export const HOME2 = "/home";
export const LOGIN = "/login";
export const RECIPES = "/recipes"
export const RECIPE = "/recipes/:recipeId"
export const ABOUT_US = "/aboutus";
export const CONTACT_US = "/contactus";
export const LOST_PASSWORD = "/lostpassword";

export const UNAUTH = "Unauthenticated";
export const AUTH = "Authenticated";

class Routes extends Component {
  componentWillMount () {
    this.props.loadUser();
  }

  render() {
    const { withBackground, isAuthenticated, logout, routes, setWithBackground } = this.props;

    return (
      <div className={ withBackground ? "with-background-image" : "" }>
        <NavBar isAuthenticated={ isAuthenticated } logout={ logout } />
        <div style={{ minHeight: window.innerHeight  - 127, overflow: "auto" }}>
          <Switch>
            { 
              routes.map(({ path, component, require, withBackground, ...rest }, index) => {
                const props = { 
                  key: `route-${index}`, 
                  component,
                  isAuthenticated,
                  withBackground,
                  setWithBackground,
                  componentProps: { isAuthenticated, ...rest } 
                };

                if (path) {
                  props.path = path;
                  props.exact = true;
                }

                if (require === AUTH) return <AuthenticatedRoute { ...props }/>;
                if (require === UNAUTH) return <UnauthenticatedRoute { ...props } />;
                return <AppliedRoutes { ...props } />;
              }) 
            }
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

Routes.propTypes = {
  withBackground: bool,
  isAuthenticated: bool,
  loadUser: func.isRequired,
  logout: func.isRequired,
  setWithBackground: func.isRequired,
  routes: arrayOf(shape({
    path: string,
    component: func.isRequired,
  })).isRequired,
};

Routes.defaultProps = {
  withBackground: false,
  isAuthenticated: undefined,
};

export default Routes;
