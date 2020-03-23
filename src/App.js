import React from "react";

import "./App.css";
import { 
  Routes, 
  HOME, HOME2, LOGIN, RECIPES, RECIPE, ABOUT_US, CONTACT_US, LOST_PASSWORD,
  UNAUTH, AUTH,
} from "./modules/Navigation";
import { Home, Login, Recipes, Recipe, AboutUs, ContactUs, LostPassword, NotFound } from "./pages";

export default () => (
  <Routes routes={[
    { path: HOME, component: Home, require: UNAUTH, withBackground: true },
    { path: HOME2, component: Home, require: UNAUTH, withBackground: true },
    { path: LOGIN, component: Login, require: UNAUTH, withBackground: true },
    { path: RECIPES, component: Recipes, require: AUTH },
    { path: RECIPE, component: Recipe, require: AUTH },
    { path: ABOUT_US, component: AboutUs, withBackground: true },
    { path: CONTACT_US, component: ContactUs, withBackground: true },
    { path: LOST_PASSWORD, component: LostPassword, withBackground: true },
    { component: NotFound, withBackground: true },
  ]} />
);
