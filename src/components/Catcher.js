import React from "react";

import "./Catcher.css";
import { formattedText } from "../translations";

export default () => (
  <div className="Catcher">
    <h1>{ formattedText("app.catcher.title") }</h1>
    <p>{ formattedText("app.catcher.description") }</p>
  </div>
);
