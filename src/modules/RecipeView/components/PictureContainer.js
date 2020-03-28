import React from "react";
import { string } from "prop-types";

const PictureContainer = ({ src }) => !src
  ? <></>
  : (
    <div className="picture-container">
      <div style={{ backgroundImage: `-webkit-linear-gradient(left, white, transparent 40%), url(${src})` }} />
    </div>
  );

PictureContainer.propTypes = {
  src: string,
};

PictureContainer.defaultProps = {
  src: undefined,
};

export default PictureContainer;