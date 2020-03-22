import React from "react";
import { string } from "prop-types";

import "./PictureContainer.css";

const PictureContainer = ({ src }) => !src
  ? <></>
  : (
    <div className="picture-container pull-right">
      <div className="picture"
           style={{ backgroundImage: `-webkit-linear-gradient(left, black, transparent 40%), url(${src})` }} />
    </div>
  );

PictureContainer.propTypes = {
  src: string,
};

PictureContainer.defaultProps = {
  src: undefined,
};

export default PictureContainer;