import React, { Component } from "react";
import { string, bool, func } from "prop-types"
import { Form } from "react-bootstrap";

class TextareaInput extends Component {
  handleOnChange = ({ target: {id, value } }) => {
    this.props.onChange(id, value);
  }

  handleOnBlur = ({ target: {id } }) => {
    const { value } = this.props;
    if (value) this.props.onBlur(id, value, { json: true });
  }

  handleOnHover = ({ target: { id } }) => {
    this.props.onHover(id);
  }

  render() {
    const { id, label, defaultValue, value, isValid } = this.props;
    const currentValue = value || defaultValue;
    const rows = currentValue.split(/\r\n|\r|\n/).length;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <Form.Control as="textarea" 
                      value={ currentValue } 
                      rows={ rows } 
                      isInvalid = { isValid === false }
                      onChange={ this.handleOnChange } 
                      onBlur={ this.handleOnBlur } 
                      onMouseEnter={ this.handleOnHover } 
                      onMouseLeave={ this.handleOnHover } />
      </Form.Group>
    );
  }
};

TextareaInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  value: string,
  isValid: bool,
  defaultValue: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
};

TextareaInput.defaultProps = {
  value: undefined,
  isValid: undefined,
};

export default TextareaInput;