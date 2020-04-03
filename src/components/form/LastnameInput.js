import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

class LastnameInput extends Component {
  handleOnChange = ({ target: {id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: { id: field, value } }) => {
    this.props.onBlur(field, value, { required: true });
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  }

  render () {
    const { id, label, value, isValid } = this.props;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <Form.Control type="text"
                      placeholder={ label }
                      value={ value }
                      isInvalid = { isValid === false }
                      onChange={ this.handleOnChange }
                      onBlur={ this.handleOnBlur }
                      onMouseEnter={ this.handleOnHover } 
                      onMouseLeave={ this.handleOnHover } />
      </Form.Group>
    );
  }
}

LastnameInput.propTypes = {
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
};

LastnameInput.defaultProps = { 
  label: "Nom",
  value: "",
  isValid: undefined,
};

export default LastnameInput;
