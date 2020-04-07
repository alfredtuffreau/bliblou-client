import React from "react";
import { oneOfType, object, string, bool } from "prop-types";
import { Overlay, Tooltip } from "react-bootstrap";

const ValidationTooltip = ({ message, target, isHover, isFocus, isValid }) => (
  <Overlay target={ target } show={ (isHover || isFocus) && isValid === false } placement="auto">
    { ({ show, ...props }) => (
      <Tooltip className={ "tooltip-error" } show={ show.toString() } { ...props }>
        { message }
      </Tooltip>
    ) }
  </Overlay>
);

ValidationTooltip.propTypes = {
  message: oneOfType([ string, object ]).isRequired,
  target: object.isRequired,
  isHover: bool,
  isFocus: bool,
  isValid: bool
};

ValidationTooltip.defaultProps = {
  isHover: undefined,
  isFocus: undefined,
  isValid: undefined
};

export default ValidationTooltip;