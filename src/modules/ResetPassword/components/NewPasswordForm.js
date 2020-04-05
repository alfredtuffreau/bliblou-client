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
    <p>Le mot de passe doit contenir 8 caractères dont :
      <br />au moins 1 chiffre
      <br />au moins 1 majuscule
      <br />au moins 1 minuscule
      <br />au moins 1 caractère spécial : <strong>{ SPECIAL_CHARACTERS }</strong>
    </p>
  </>
);
const ConfirmationCodeInputWithTooltip = withValidationTooltip(
  ConfirmationCodeInput, CONFIRMATION_CODE_ALERT_MESSAGE, true
);
const PasswordInputWithTooltip = withValidationTooltip(PasswordInput, PASSWORD_ALERT_MESSAGE);

class NewPasswordForm extends Component {
  validToSubmit = () => {
    const { confirmationCode, password } =this.props;
    return [ confirmationCode, password ].filter(({ isValid }) => isValid === false)
                                         .length === 0;
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
      confirmationCode, password, onFieldChange, onFieldBlur, onFieldHover, onPasswordClick, isLoading 
    } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <PasswordInputWithTooltip { ...password }
                                  label="Nouveau mot de passe"
																	onChange={ onFieldChange } 
																	onBlur={ onFieldBlur }
																	onHover={ onFieldHover } 
																	onClick={ onPasswordClick } />
        <ConfirmationCodeInputWithTooltip { ...confirmationCode }
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

NewPasswordForm.propTypes = {
	isLoading: bool,
  mail: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  confirmationCode: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  password: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	onFieldChange: func.isRequired,
	onFieldBlur: func.isRequired,
	onFieldHover: func.isRequired,
  onPasswordClick: func.isRequired,
  onSubmit: func.isRequired
};

NewPasswordForm.defaultProps = {
  isLoading : false
};

export default withRouter(NewPasswordForm);