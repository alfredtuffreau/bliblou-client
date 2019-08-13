import React from "react";

import "./App.css";
import { NavBar, Routes, HOME, LOGIN, LOST_PASSWORD } from "./modules/Navigation";
import { Home, Login, LostPassword, NotFound } from "./pages";

export default () => (
  <div className="App">
   <NavBar />
    <div className="Main">
      <Routes routes={[
        { path: HOME, component: Home },
        { path: LOGIN, component: Login },
        { path: LOST_PASSWORD, component: LostPassword },
        { component: NotFound },
      ]} />
    </div>
    <footer />
  </div>
);
