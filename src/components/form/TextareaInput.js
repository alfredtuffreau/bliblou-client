import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

import ValidationTooltip from "./ValidationTooltip";

const CONTENT_ALERT_MESSAGE = "Le format JSON est invalide.";

class TextareaInput extends Component {
  constructor (props) {
    super(props);
    this.state = { isHover: false, isFocus: false };
    this.attachRef = target => this.setState({ target });
  }

  handleOnChange = ({ target: {id, value } }) => {
    this.props.onChange(id, value);
  };

  handleOnFocus = () => {
    this.setState({ isFocus: true });
  };

  handleOnBlur = ({ target: {id } }) => {
    const { value } = this.props;
    if (value) this.props.onBlur(id, value, { json: true });
    this.setState({ isFocus: false });
  };

  handleOnMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render () {
    const { id, label, defaultValue, value, isValid } = this.props;
    const currentValue = value || defaultValue;
    const rows = currentValue.split(/\r\n|\r|\n/).length;
    const { target, isHover, isFocus } = this.state;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <Form.Control as="textarea" 
                      value={ currentValue } 
                      rows={ rows } 
                      isInvalid = { isValid === false }
                      ref={ this.attachRef } 
                      onChange={ this.handleOnChange }
                      onFocus={ this.handleOnFocus }
                      onBlur={ this.handleOnBlur }
                      onMouseEnter={ this.handleOnMouseEnter } 
                      onMouseLeave={ this.handleOnMouseLeave } />
        { target 
          ? <ValidationTooltip message={ CONTENT_ALERT_MESSAGE } 
                               target={ target } 
                               isHover={ isHover } 
                               isFocus={ isFocus } 
                               isValid={ isValid } />
          : null }
      </Form.Group>
    );
  }
}

TextareaInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  defaultValue: string.isRequired,
  value: string,
  isValid: bool,
  onChange: func,
  onBlur: func
};

TextareaInput.defaultProps = {
  value: undefined,
  isValid: undefined,
  onChange: () => {},
  onBlur: () => {}
};

export default TextareaInput;