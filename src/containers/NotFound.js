import React from "react";

import "./NotFound.css";
import icon from "../images/fire.png";
import { formattedText } from "../translations";

export default () =>
  <div className="NotFound">
    <h2>{ formattedText("app.pageNotFound.title") }</h2>
    <h3>{ formattedText("app.pageNotFound.description") }</h3>
    <img src={ icon } alt="Not found" className="Icon" />
    <div>
      <a href="javascript:history.back()">{ formattedText("app.pageNotFound.links.back") }</a> 
      {" | "} 
      <a href="/">{ formattedText("app.pageNotFound.links.home") }</a>
    </div>
  </div>;
