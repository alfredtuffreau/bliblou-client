import React from "react";

import { 
  Routes, 
  HOME, HOME2, LOGIN, RECIPES, RECIPE, ABOUT_US, CONTACT_US, LOST_PASSWORD,
  UNAUTH, AUTH,
} from "./modules/Navigation";
import { Home, Login, Recipes, Recipe, AboutUs, ContactUs, LostPassword, NotFound } from "./pages";

export default () => (
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
);
