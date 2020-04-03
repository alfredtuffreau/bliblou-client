import React, { Component } from "react";
import { string, bool, func } from "prop-types"
import { Form } from "react-bootstrap";

class TextareaInput extends Component {
  handleOnChange = ({ target: {id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: {id: field, value:fieldVal } }) => {
    const { value } = this.props;
    if (value) this.props.onBlur(field, value, { json: true });
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
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