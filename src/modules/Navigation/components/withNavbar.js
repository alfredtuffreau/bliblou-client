import React, { Component } from "react";

import NavBar from "../containers/NavBar";

function withNavbar(WrappedComponent) {
  class WithNavbar extends Component {
    render() {
      return (
        <>
          <NavBar />
          <WrappedComponent { ...this.props } />
        </>
      );
    }
  }

  return WithNavbar;
}

export default withNavbar;
