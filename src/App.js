import React from "react";

import "./App.css";
import { NavBar, Routes, Footer, HOME, LOGIN, LOST_PASSWORD, ABOUT, CONTACT_US } from "./modules/Navigation";
import { Home, Login, LostPassword, NotFound, About, ContactUs } from "./pages";

export default () => (
  <div className="App">
    <NavBar />
    <div className="Main">
      <Routes routes={[
        { path: HOME, component: Home },
        { path: LOGIN, component: Login },
        { path: LOST_PASSWORD, component: LostPassword },
        { path: ABOUT, component: About },
        { path: CONTACT_US, component: ContactUs },
        { component: NotFound },
      ]} />
    </div>
    <Footer />
  </div>
);
