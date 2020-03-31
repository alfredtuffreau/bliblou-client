import React from "react";
import { string } from "prop-types";

const ImagePanel = ({ src, minHeight, children }) => (
  <div className="panel-with-image" style={{ backgroundImage: `url(${src})`, minHeight }}>
    <div className="panel-content">{ children }</div>
  </div>
);

ImagePanel.propTypes = {
  src: string.isRequired,
  minHeight: string
}

ImagePanel.defaultProps = {
  minHeight: undefined
}

export default ImagePanel;