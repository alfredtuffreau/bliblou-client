import React from "react";
import { Route, Redirect } from "react-router-dom";

import { LOGIN } from "./Routes";

const AuthenticatedRoute = ({ component: C, componentProps, isAuthenticated, ...rest }) => {
  return (
    <Route { ...rest } render={
      props => !isAuthenticated
        ? <Redirect to={ `${LOGIN}?redirect=${props.location.pathname}${props.location.search}` } />
        : <C { ...props } { ...componentProps } /> 
    } />
  );
}

export default AuthenticatedRoute;