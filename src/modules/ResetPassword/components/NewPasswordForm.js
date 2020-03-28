import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import ConfirmationCodeInput from "../../../components/form/ConfirmationCodeInput";
import PasswordInput from "../../../components/form/PasswordInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const CONFIRMATION_CODE_ALERT_MESSAGE = "Saisissez votre code de vérification";
const SPECIAL_CHARACTERS = "^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ `";
const PASSWORD_ALERT_MESSAGE = (
  <>
    <p>Le mot de passe doit contenir:</p>
    <ul>
      <li>8 caractères</li>
      <li>au moins 1 chiffre</li>
      <li>au moins 1 majuscule</li>
      <li>au moins 1 minuscule</li>
      <li>au moins 1 caractère spécial :<br /><strong>{ SPECIAL_CHARACTERS }</strong></li>
    </ul>
  </>
);
const ConfirmationCodeInputWithTooltip = withValidationTooltip(
  ConfirmationCodeInput, CONFIRMATION_CODE_ALERT_MESSAGE, true
);
const PasswordInputWithTooltip = withValidationTooltip(PasswordInput, PASSWORD_ALERT_MESSAGE);

class NewPasswordForm extends Component {
  validToSubmit = () => {
    const invalidFields = [
      this.props.confirmationCode, 
			this.props.password
    ].filter(({ isValid }) => isValid === false);
    return invalidFields.length === 0;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, password, confirmationCode, onSubmit, history } = this.props;
    onSubmit(mail, password, confirmationCode, history);
  };

  handleOnCancel = () => {
    const { onCancel, history } = this.props;
    onCancel(() => history.goBack());
  };

  render() {
    const { 
      confirmationCode, password, onChange, onBlur, onHover, onPasswordClick, isLoading  
    } = this.props;

    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <PasswordInputWithTooltip label="Nouveau mot de passe"
                                  password={ password }
                                  showTooltip={ password.showTooltip } 
																	onChange={ onChange } 
																	onBlur={ onBlur }
																	onHover={ onHover } 
																	onClick={ onPasswordClick } />
        <ConfirmationCodeInputWithTooltip label="Code de vérification" 
                                          confirmationCode={ confirmationCode }
                                          showTooltip={ confirmationCode.showTooltip }
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

NewPasswordForm.propTypes = {
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
  confirmationCode: shape({ value: string, isValid: bool, showTooltip: bool }),
  password: shape({ value: string, isValid: bool, showTooltip: bool }),
	isLoading: bool,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
  onPasswordClick: func.isRequired,
  onSubmit: func.isRequired
};

NewPasswordForm.defaultProps = {
	mail: { value: "", isValid: undefined, showTooltip: false },
	confirmationCode: { value: "", isValid: undefined, showTooltip: false },
  password: { value: "", isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(NewPasswordForm);