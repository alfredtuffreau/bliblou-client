import React from "react";
import { string } from "prop-types";

const ImagePanel = ({ src, minHeight, className, children }) => (
  <div className="panel-with-image" style={{ backgroundImage: `url(${src})`, minHeight }}>
    <div className={ `panel-content${className ? ` ${className}` : "" }` }>{ children }</div>
  </div>
);

ImagePanel.propTypes = {
  src: string.isRequired,
  minHeight: string,
  className: string
}

ImagePanel.defaultProps = {
  minHeight: undefined,
  className: undefined
}

export default ImagePanel;