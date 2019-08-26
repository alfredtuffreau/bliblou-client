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
    const { confirmationCode } =  this.props;
    return confirmationCode.isValid !== false;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const {
      mail, password, confirmationCode, onSubmit, history
		} = this.props;
		
		onSubmit(mail, password, confirmationCode, history);
  };

  render () {
    const { confirmationCode, onChange, onBlur, onHover, isLoading } = this.props;
    const label = "Code de vérification";

    return (
      <Form onSubmit={ this.handleOnSubmit } className="Confirm">
        <ConfirmationCodeInputWithTooltip label={ label } 
                                          confirmationCode={ confirmationCode }
                                          showTooltip={ confirmationCode.showTooltip }
                                          onChange={ onChange }
                                          onBlur={ onBlur }
                                          onHover={ onHover } />
				<Button variant="success"
                type="submit"
                size="lg"
                disabled={ !this.validToSubmit() || isLoading }>
          { !isLoading
              ? "Vérifier >"
              : "Verification..." }
        </Button>
      </Form>
    );
  }
}

ConfirmationForm.propTypes = {
  confirmationCode: shape({ value: string, isValid: bool, showTooltip: bool }),
	mail: string,
	password: string,
	isLoading: bool,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
  onUnmount: func.isRequired,
};

ConfirmationForm.defaultProps = {
	confirmationCode: { value: "", isValid: undefined, showTooltip: false },
	mail: "",
	password: "",
  isLoading : false,
};

export default withRouter(ConfirmationForm);
