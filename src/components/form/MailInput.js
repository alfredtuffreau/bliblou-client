import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

class MailInput extends Component {
  handleOnChange = ({ target: { id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: { id: field, value } }) => {
    this.props.onBlur(field, value, { stop: true, required: true, email: true });
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  }

  render () {
    const { mail: { value, isValid } } = this.props;
    const label = "Adresse email";

    return (
      <Form.Group controlId="mail">
        <Form.Label hidden>{ label }</Form.Label>
        <Form.Control type="mail"
                      value={ value }
                      placeholder={ label }
                      isInvalid = { isValid === false }
                      onChange={ this.handleOnChange }
                      onBlur={ this.handleOnBlur }
                      onMouseEnter={ this.handleOnHover } 
                      onMouseLeave={ this.handleOnHover } />
      </Form.Group>
    );
  }
}

MailInput.propTypes = {
  mail: shape({
    value: string,
    isValid: bool,
  }),
  showTooltip: bool,
  onChange: func.isRequired,
  onBlur: func,
  onHover: func,
};

MailInput.defaultProps = { 
  mail: {
    value: "",
    isValid: undefined,
  },
  showTooltip: false,
  onBlur: () => {},
  onHover: () => {},
};

export default MailInput;
