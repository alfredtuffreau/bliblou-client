import React from "react";

import "./Catcher.css";
import { formattedText } from "../translations";

export default () => (
  <div className="Catcher">
    <h2>{ formattedText("app.catcher.title") }</h2>
    <p>{ formattedText("app.catcher.description") }</p>
  </div>
);
