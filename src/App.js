import React from "react";

import "./App.css";
import { NavBar, Routes, Footer, HOME, LOGIN, LOST_PASSWORD, ABOUT, CONTACT_US } from "./modules/Navigation";
import { Home, Login, LostPassword, NotFound, About, ContactUs } from "./pages";

export default () => (
  <div className="app-container">
    <div style={{ minHeight: window.innerHeight  - 127 }}>
      <div className="with-background-image">
        <NavBar />
        <Routes routes={[
          { path: HOME, component: Home },
          { path: LOGIN, component: Login },
          { path: LOST_PASSWORD, component: LostPassword },
          { path: ABOUT, component: About },
          { path: CONTACT_US, component: ContactUs },
          { component: NotFound },
        ]} />
      </div>
    </div>
    <Footer />
  </div>
);
