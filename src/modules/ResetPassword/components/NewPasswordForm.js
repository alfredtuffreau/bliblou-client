import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import ConfirmationCodeInput from "../../../components/form/ConfirmationCodeInput";
import PasswordInput from "../../../components/form/PasswordInput";

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
      confirmationCode, password, validateField, onFieldChange, onPasswordClick, isLoading 
    } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <PasswordInput { ...password }
                       label="Nouveau mot de passe"
                       onChange={ onFieldChange }
                       onBlur={ validateField }
                       onClick={ onPasswordClick } />
        <ConfirmationCodeInput { ...confirmationCode }
                               onChange={ onFieldChange }
                               onBlur={ validateField } />
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
	validateField: func.isRequired,
  onPasswordClick: func.isRequired,
  onSubmit: func.isRequired
};

NewPasswordForm.defaultProps = {
  isLoading : false
};

export default withRouter(NewPasswordForm);