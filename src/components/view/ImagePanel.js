import React from "react";
import { string } from "prop-types";

const ImagePanel = ({ src, minHeight, panelClassName, contentClassName, children }) => (
  <div className={ `panel-with-image${panelClassName ? ` ${panelClassName}` : "" }` } 
       style={{ backgroundImage: `url(${src})`, minHeight }}>
    <div className={ `panel-content${contentClassName ? ` ${contentClassName}` : "" }` }>{ children }</div>
  </div>
);

ImagePanel.propTypes = {
  src: string.isRequired,
  minHeight: string,
  panelClassName: string,
  contentClassName: string
}

ImagePanel.defaultProps = {
  minHeight: undefined,
  panelClassName: undefined,
  contentClassName: undefined
}

export default ImagePanel;