import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { shape, string, bool, func } from "prop-types";

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
    const { id, label, confirmationCode: { value, isValid } } = this.props;

    return (
      <Form.Group controlId={ id } bsSize="large">
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
  label: string.isRequired,
  id: string,
  confirmationCode: shape({ value: string, isValid: bool }),
  showTooltip: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
}

ConfirmationCodeInput.defaultProps = {
  id: "confirmationCode",
  confirmationCode: { value: "", isValid: undefined },
  showTooltip: false,
}

export default ConfirmationCodeInput;