import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoutes from "./components/AppliedRoutes";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";

export const HOME = "/";
export const LOGIN = "/login";
export const LOST_PASSWORD = "/lostpassword";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoutes path={ HOME } exact component={ Home } props={childProps} />
    <AppliedRoutes path={ LOGIN } exact component={ Login } props={childProps} />
    <AppliedRoutes path={ LOST_PASSWORD } exact component={ ResetPassword } props={childProps} />*/}
    <Route component={NotFound} />
  </Switch>
);
