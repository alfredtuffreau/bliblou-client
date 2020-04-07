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
export const EDIT_RECIPE = "/recipes/:recipeId?mode=edit"
export const ABOUT_US = "/aboutus";
export const CONTACT_US = "/contactus";
export const LOST_PASSWORD = "/lostpassword";

export const UNAUTH = "Unauthenticated";
export const AUTH = "Authenticated";

class Routes extends Component {
  constructor (props) {
    super(props)
    this.footer = React.createRef();
  }

  setFooterHeight () {
    this.props.setFooterHeight(this.footer.current.clientHeight);
  }

  componentWillMount () {
    this.props.loadUser();
  }

  componentDidMount () {
    this.setFooterHeight()
    window.addEventListener("resize", this.setFooterHeight.bind(this));
  }
  render () {
    const { routes, footerHeight, isAuthenticated, isEditor, logout } = this.props;
    return (
      <>
        <NavBar isAuthenticated={ isAuthenticated } logout={ logout } />
        <main style={{ paddingBottom: `${footerHeight}px` }}>
          <Switch>
            { routes.map(({ path, component, require, ...rest }, index) => {
              const props = { 
                key: `route-${index}`, 
                component,
                isAuthenticated,
                componentProps: { navbarHeight: 70, footerHeight, isAuthenticated, isEditor, ...rest } 
              };

              if (path) {
                props.path = path;
                props.exact = true;
              }

              if (require === AUTH) return <AuthenticatedRoute { ...props }/>;
              if (require === UNAUTH) return <UnauthenticatedRoute { ...props } />;
              return <AppliedRoutes { ...props } />;
            }) }
          </Switch>
        </main>
        <Footer ref={ this.footer } />
      </>
    );
  }
}

Routes.propTypes = {
  isAuthenticated: bool,
  loadUser: func.isRequired,
  logout: func.isRequired,
  routes: arrayOf(shape({
    path: string,
    component: func.isRequired,
  })).isRequired,
};

Routes.defaultProps = {
  isAuthenticated: undefined,
};

export default Routes;
