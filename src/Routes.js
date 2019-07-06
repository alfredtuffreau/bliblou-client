import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoutes from "./components/AppliedRoutes";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export const HOME = "/";
export const LOGIN = "/login";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoutes path={ HOME } exact component={ Home } props={childProps} />
    <AppliedRoutes path={ LOGIN } exact component={ Login } props={childProps} />
    <Route component={NotFound} />
  </Switch>
);
