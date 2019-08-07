import React from "react";

import { formattedText } from "../translations";

import "./Catcher.css";

export default () => (
  <div className="Catcher">
    <h1>{ formattedText("app.catcher.title") }</h1>
    <p>{ formattedText("app.catcher.description") }</p>
  </div>
);
