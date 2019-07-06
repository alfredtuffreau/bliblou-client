import React from "react";

import "./NotFound.css";
import { formattedText } from "../translations";

export default () =>
  <div className="NotFound">
    <h1>{ formattedText("app.pageNotFound") }</h1>
  </div>;
