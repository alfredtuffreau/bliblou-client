import React from "react";
import { Route } from "react-router-dom";

import withBackgroundHandler from "./withBackgroundHandler";

const AppliedRoute = (
  { component: C, componentProps, ...rest }
) => <Route { ...rest } render={ props => <C {...props} {...componentProps} /> } />;

export default withBackgroundHandler(AppliedRoute);
