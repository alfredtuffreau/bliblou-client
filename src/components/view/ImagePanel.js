import React from "react";
import { string, number, bool } from "prop-types";

const ImagePanel = ({ src, navbarHeight, footerHeight, fullScreen, children }) => (
  <div className="panel-with-image" style={{ 
    backgroundImage: `url(${src})`,
    minHeight: fullScreen ? `calc(100vh - ${navbarHeight}px - ${footerHeight}px)` : undefined
  }}>
    <div className="panel-content">{ children }</div>
  </div>
);

ImagePanel.propTypes = {
  src: string.isRequired,
  navbarHeight: number,
  footerHeight: number,
  fullScreen: bool
}

ImagePanel.defaultProps = {
  navbarHeight: 0,
  footerHeight: 0,
  fullScreen: false
}

export default ImagePanel;