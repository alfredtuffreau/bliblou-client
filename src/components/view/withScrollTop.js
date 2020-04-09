import React, { Component } from "react";

function withScrollTop(WrappedComponent) {
  class WithScrollTop extends Component {
    componentDidMount = () => window.scrollTo(0,0);
    render = () => <WrappedComponent { ...this.props } />
  }

  return WithScrollTop;
}

export default withScrollTop;
