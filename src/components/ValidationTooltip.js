import React, { Component } from "react";
import { bool } from "prop-types";
import { Overlay, Tooltip } from "react-bootstrap";

import "./ValidationTooltip.css";

function withValidationTooltip(WrappedComponent, message, high) {
  class WithValidationTooltip extends Component {
    constructor() {
      super();
      this.attachRef = target => this.setState({ target });
      this.state = {};
    }

    render() {
      const { target } = this.state;
      const { showTooltip, ...rest } = this.props;
      
      return (
        <>
          <WrappedComponent ref={ this.attachRef } { ...rest } />
          <Overlay target={ target } show={ showTooltip } placement="left">
            { props => (
              <Tooltip 
                id={ `validation-error` } 
                className={ high ? "up tooltip-error" : "tooltip-error" }
                { ...props }>
                { message }
              </Tooltip>
            ) }
          </Overlay>
        </>
      );
    }
  }

  WithValidationTooltip.propTypes = {
    showTooltip: bool,
  };

  WithValidationTooltip.defaultProps = { 
    showTooltip: false,
  };

  return WithValidationTooltip;
}

export default withValidationTooltip;
