import React from "react";
import { string } from "prop-types";

import icon from "../../images/building.png";
import { formattedText } from "../../translations";

const BuildingContent = ({ title, descr }) => (
  <>
    <h2>{ title }</h2>
    <h3>{ descr }</h3>
    <img src={ icon } alt="Building" />
  </>
);

BuildingContent.propTypes = {
  title: string,
  descr: string,
};

BuildingContent.defaultProps = {
  title: formattedText("app.building.title"),
  descr: formattedText("app.building.description"),
};

export default BuildingContent;