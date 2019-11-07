import React, { Component } from "react";

import Footer from "./Footer";

function withFooter(WrappedComponent) {
  class WithFooter extends Component {
    render() {
      return (
        <>
          <WrappedComponent { ...this.props } />
          <Footer />
        </>
      );
    }
  }

  return WithFooter;
}

export default withFooter;
