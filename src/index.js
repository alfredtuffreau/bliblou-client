import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

import "./style/typography.css";
import "./style/layouts.css";
import "./style/colors.css";
import { configAWS, configApproveJS } from "./configs";
import { store } from "./store";
import * as server from "./server";
import { 
  Home, Login, Recipes, Recipe, AboutUs, ContactUs, LostPassword, NotFound
} from "./pages";
import { 
  Routes, HOME, HOME2, LOGIN, RECIPES, RECIPE, ABOUT_US, CONTACT_US, LOST_PASSWORD, UNAUTH, AUTH
} from "./modules/Navigation";

configAWS();
configApproveJS();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes routes={[
        { path: HOME, component: Home, require: UNAUTH },
        { path: HOME2, component: Home, require: UNAUTH },
        { path: LOGIN, component: Login, require: UNAUTH },
        { path: RECIPES, component: Recipes, require: AUTH },
        { path: RECIPE, component: Recipe, require: AUTH },
        { path: ABOUT_US, component: AboutUs },
        { path: CONTACT_US, component: ContactUs },
        { path: LOST_PASSWORD, component: LostPassword },
        { component: NotFound },
      ]} />
    </Provider>
  </Router>,
  document.getElementById("root")
);

server.unregister();
