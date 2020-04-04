import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import ConfirmationCodeInput from "../../../components/form/ConfirmationCodeInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const CONFIRMATION_CODE_ALERT_MESSAGE = "Saisissez votre code de vérification";
const ConfirmationCodeInputWithTooltip = withValidationTooltip(
  ConfirmationCodeInput, CONFIRMATION_CODE_ALERT_MESSAGE, true
);

class ConfirmationForm extends Component {
  componentWillUnmount() {
    this.props.onUnmount();
  };

  validToSubmit = () => {
    const { confirmationCodeField } =  this.props;
    return confirmationCodeField.isValid !== false;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, password, confirmationCodeField, onSubmit, history } = this.props;
		onSubmit(mail, password, confirmationCodeField, history);
  };

  render () {
    const { confirmationCodeField, onChange, onBlur, onHover, isLoading } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <ConfirmationCodeInputWithTooltip id={ confirmationCodeField.id }
                                          value={ confirmationCodeField.value }
                                          isValid={ confirmationCodeField.isValid }
                                          showTooltip={ confirmationCodeField.showTooltip }
                                          onChange={ onChange }
                                          onBlur={ onBlur }
                                          onHover={ onHover } />
				<Button variant="success"
                type="submit"
                size="lg"
                disabled={ !this.validToSubmit() || isLoading }>
          { !isLoading ? "Vérifier >" : "Verification..." }
        </Button>
      </Form>
    );
  }
}

ConfirmationForm.propTypes = {
	isLoading: bool,
  confirmationCodeField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	mail: string.isRequired,
	password: string.isRequired,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
  onUnmount: func.isRequired,
};

ConfirmationForm.defaultProps = {
  isLoading : false,
};

export default withRouter(ConfirmationForm);
