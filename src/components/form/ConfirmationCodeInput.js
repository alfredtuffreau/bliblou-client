import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { string, bool, func } from "prop-types";

import ValidationTooltip from "./ValidationTooltip";

const CONFIRMATION_CODE_ALERT_MESSAGE = "Saisissez votre code de vérification";

class ConfirmationCodeInput extends Component {
  constructor (props) {
    super(props);
    this.state = { isHover: false, isFocus: false };
    this.attachRef = target => this.setState({ target });
  }

  handleOnChange = ({ target: { id, value } }) => {
    this.props.onChange(id, value);
  };

  handleOnFocus = () => {
    this.setState({ isFocus: true });
  };

  handleOnBlur = ({ target: { id, value } }) => {
    this.props.onBlur(id, value, { required: true, notBlank: true });
    this.setState({ isFocus: false });
  };

  handleOnMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render () {
    const { id, label, value, isValid } = this.props;
    const { target, isHover, isFocus } = this.state;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <Form.Control type="tel"
                      placeholder={ label }
                      value={ value }
                      isInvalid = { isValid === false }
                      ref={ this.attachRef } 
                      onChange={ this.handleOnChange }
                      onFocus={ this.handleOnFocus }
                      onBlur={ this.handleOnBlur }
                      onMouseEnter={ this.handleOnMouseEnter } 
                      onMouseLeave={ this.handleOnMouseLeave } />
        <Form.Text>
          Consultez votre boîte mail pour le code de vérification
        </Form.Text>
        { target 
          ? <ValidationTooltip message={ CONFIRMATION_CODE_ALERT_MESSAGE } 
                              target={ target } 
                              isHover={ isHover } 
                              isFocus={ isFocus } 
                              isValid={ isValid } />
          : null }
      </Form.Group>
    );
  }
}

ConfirmationCodeInput.propTypes = {
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onChange: func,
  onBlur: func
};

ConfirmationCodeInput.defaultProps = {
  label: "Code de vérification",
  value: undefined,
  isValid: undefined,
  onChange: () => {},
  onBlur: () => {}
};

export default ConfirmationCodeInput;