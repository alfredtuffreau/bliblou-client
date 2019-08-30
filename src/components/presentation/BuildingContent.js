import React from "react";

import icon from "../../images/building.png";
import { formattedText } from "../../translations";

import "./BuildingContent.css";

export default () => (
  <>
    <h2>{ formattedText("app.building.title") }</h2>
    <h3>{ formattedText("app.building.description") }</h3>
    <img src={ icon } alt="Building" className="building-content-image centered-image" />
  </>
);