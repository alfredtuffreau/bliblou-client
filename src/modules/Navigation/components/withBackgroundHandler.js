import React, { Component } from "react";
import { bool, func } from "prop-types";

function withBackgroundImage(WrappedComponent) {
  class WithBackgroundImage extends Component {
    componentWillMount() {
      const { withBackground, setWithBackground } = this.props;
      setWithBackground(withBackground);
    }

    render = () => <WrappedComponent {...this.props} />;
  }

  WithBackgroundImage.propTypes = {
    withBackground: bool,
    setWithBackground: func.isRequired,
  };

  WithBackgroundImage.defaultProps = {
    withBackground: false
  };

  return WithBackgroundImage;
}

export default withBackgroundImage;