import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import ConfirmationCodeInput from "../../../components/form/ConfirmationCodeInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const CONFIRMATION_CODE_ALERT_MESSAGE = "Saisissez votre code de vérification";
const ConfirmationCodeInputWithTooltip = withValidationTooltip(
  ConfirmationCodeInput, CONFIRMATION_CODE_ALERT_MESSAGE, true
);

class CompleteSignUpForm extends Component {
  validToSubmit = () => {
    const { signUpCode } = this.props;
    return signUpCode.isValid !== false;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, signUpCode, onSubmit } = this.props;
    onSubmit(mail, signUpCode);
  };

  handleOnCancel = () => {
    const { onCancel, history } = this.props;
    onCancel(() => history.goBack());
  };

  render() {
    const { 
      signUpCode, onChange, onBlur, onHover, isLoading  
    } = this.props;

    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <ConfirmationCodeInputWithTooltip id="signUpCode" 
                                          { ...signUpCode }
                                          showTooltip={ signUpCode.showTooltip }
                                          onChange={ onChange }
                                          onBlur={ onBlur }
                                          onHover={ onHover } />
        <div className="form-buttons">
          <Button variant="link"
                  onClick={ this.handleOnCancel }>
            Annuler
          </Button>
          <Button variant="success"
                  type="submit"
                  size="lg"
                  disabled={ !this.validToSubmit() || isLoading }>
            { !isLoading ? "Valider >" : "Validation..." }
          </Button>
        </div>
      </Form>
    );
  }
}

CompleteSignUpForm.propTypes = {
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
  signUpCode: shape({ value: string, isValid: bool, showTooltip: bool }),
	isLoading: bool,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

CompleteSignUpForm.defaultProps = {
	mail: { value: "", isValid: undefined, showTooltip: false },
	confirmationCode: { value: "", isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(CompleteSignUpForm);