import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

class MailInput extends Component {
  handleOnChange = ({ target: { id, value } }) => {
    this.props.onChange(id, value);
  }

  handleOnBlur = ({ target: { id, value } }) => {
    this.props.onBlur(id, value, { stop: true, required: true, email: true });
  }

  handleOnHover = ({ target: { id } }) => {
    this.props.onHover(id);
  }

  render () {
    const { id, label, value, isValid } = this.props;
    return (
      <Form.Group controlId={ id }>
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
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onChange: func.isRequired,
  onBlur: func,
  onHover: func,
};

MailInput.defaultProps = { 
  label: "Adresse email",
  value: "",
  isValid: undefined,
  onBlur: () => {},
  onHover: () => {},
};

export default MailInput;
