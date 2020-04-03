import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { string, bool, func } from "prop-types";

class ConfirmationCodeInput extends Component {
  handleOnChange = ({ target: { id: field, value } }) => {
    this.props.onChange(field, value);
  };

  handleOnBlur = ({ target: { id: field, value } }) => {
    this.props.onBlur(field, value, { required: true });
  };

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  };
  
  render() {
    const { id, label, value, isValid } = this.props;

    return (
      <Form.Group controlId={ id }>
          <Form.Label hidden>{ label }</Form.Label>
          <Form.Control type="tel"
                        value={ value }
                        isInvalid = { isValid === false }
                        placeholder={ label }
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
          <Form.Text>
            Consultez votre boîte mail pour le code de vérification
          </Form.Text>
        </Form.Group>
    );
  }
}

ConfirmationCodeInput.propTypes = {
  id: string.isRequired, // "confirmationCode"
  label: string,
  value: string, 
  isValid: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
}

ConfirmationCodeInput.defaultProps = {
  label: "Code de vérification",
  value: "",
  isValid: undefined,
}

export default ConfirmationCodeInput;