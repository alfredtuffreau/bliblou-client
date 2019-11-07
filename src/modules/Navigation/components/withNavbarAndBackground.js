import React, { Component } from "react";

import withNavbar from "./withNavbar";

function withNavbarAndBackground(WrappedComponent) {
  const ComponentWithBackground = withNavbar(WrappedComponent);

  class WithNavbarAndBackground extends Component {
    render() {
      return (
        <div style={{ minHeight: window.innerHeight  - 127 }}>
          <div className="with-background-image">
            <ComponentWithBackground { ...this.props } />
          </div>
        </div>
      );
    }
  }

  return WithNavbarAndBackground;
}

export default withNavbarAndBackground;
