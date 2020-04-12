import React from "react";
import { string } from "prop-types";

const ImagePanel = ({ src, minHeight, className, children }) => (
  <div className={ `image-container panel-with-image${className ? ` ${className}` : "" }` } 
       style={{ backgroundImage: `url(${src})`, minHeight }}>
    <div>{ children }</div>
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