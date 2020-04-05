import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form } from "react-bootstrap";

class LastnameInput extends Component {
  handleOnChange = ({ target: {id, value } }) => {
    this.props.onChange(id, value);
  }

  handleOnBlur = ({ target: { id, value } }) => {
    this.props.onBlur(id, value, { required: true });
  }

  handleOnHover = ({ target: { id } }) => {
    this.props.onHover(id);
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
