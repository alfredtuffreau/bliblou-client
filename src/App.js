import React from "react";

import "./App.css";
import { Routes, HOME, LOGIN, LOST_PASSWORD, ABOUT_US, CONTACT_US, RECIPE } from "./modules/Navigation";
import { Home, Login, LostPassword, NotFound, AboutUs, ContactUs, Recipe } from "./pages";

export default () => (
  <div className="app-container">
    <Routes routes={[
      { path: HOME, component: Home },
      { path: LOGIN, component: Login },
      { path: LOST_PASSWORD, component: LostPassword },
      { path: ABOUT_US, component: AboutUs },
      { path: CONTACT_US, component: ContactUs },
      { path: RECIPE, component: Recipe },
      { component: NotFound },
    ]} />
  </div>
);
