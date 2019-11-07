import React, { Component } from "react";
import { withRouter } from 'react-router';

function withScrollTop(WrappedComponent) {
  class WithScrollTop extends Component {
    componentDidMount = () => window.scrollTo(0,0);
    render = () => <WrappedComponent {...this.props} />
  }

  return withRouter(WithScrollTop);
}

export default withScrollTop;
