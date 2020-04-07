import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

import ValidationTooltip from "./ValidationTooltip";

const MAIL_ALERT_MESSAGE = "Saisissez une adresse valide";

class MailInput extends Component {
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
    this.props.onBlur(id, value, { stop: true, required: true, email: true });
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
        <Form.Control type="mail"
                      placeholder={ label }
                      value={ value }
                      isInvalid = { isValid === false }
                      ref={ this.attachRef } 
                      onChange={ this.handleOnChange }
                      onFocus={ this.handleOnFocus }
                      onBlur={ this.handleOnBlur }
                      onMouseEnter={ this.handleOnMouseEnter }
                      onMouseLeave={ this.handleOnMouseLeave } />
        { target 
          ? <ValidationTooltip message={ MAIL_ALERT_MESSAGE } 
                               target={ target } 
                               isHover={ isHover } 
                               isFocus={ isFocus } 
                               isValid={ isValid } />
          : null }
      </Form.Group>
    );
  }
}

MailInput.propTypes = {
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onChange: func,
  onBlur: func
};

MailInput.defaultProps = { 
  label: "Adresse email",
  value: undefined,
  isValid: undefined,
  onChange: () => {},
  onBlur: () => {}
};

export default MailInput;
