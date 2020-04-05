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
    const { signUpCode, onFieldChange, onFieldBlur, onFieldHover, isLoading } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <ConfirmationCodeInputWithTooltip { ...signUpCode }
                                          onChange={ onFieldChange }
                                          onBlur={ onFieldBlur }
                                          onHover={ onFieldHover } />
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
	isLoading: bool,
  mail: string.isRequired,
  signUpCode: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	onFieldChange: func.isRequired,
	onFieldBlur: func.isRequired,
	onFieldHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

CompleteSignUpForm.defaultProps = {
  isLoading : false,
};

export default withRouter(CompleteSignUpForm);