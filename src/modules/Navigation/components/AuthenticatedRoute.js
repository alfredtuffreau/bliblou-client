import React from "react";
import { Route, Redirect } from "react-router-dom";

import { LOGIN } from "./Routes";
import withBackgroundHandler from "./withBackgroundHandler";

const AuthenticatedRoute = ({ component: C, componentProps, isAuthenticated, ...rest }) => (
  <Route { ...rest } render={
    props => isAuthenticated === false
      ? <Redirect to={ `${LOGIN}?redirect=${props.location.pathname}${props.location.search}` } />
      : <C { ...props } { ...componentProps } /> 
  } />
);

export default withBackgroundHandler(AuthenticatedRoute);