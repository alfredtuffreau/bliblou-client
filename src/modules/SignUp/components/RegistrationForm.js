import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Button, Form } from "react-bootstrap";

import RowInputs from "../../../components/form/RowInputs";
import FirstnameInput from "../../../components/form/FirstnameInput";
import LastnameInput from "../../../components/form/LastnameInput";
import MailInput from "../../../components/form/MailInput";
import PasswordInput from "../../../components/form/PasswordInput";
import GenderInput from "../../../components/form/GenderInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const NAMES_ALERT_MESSAGE = "Saisissez votre nom complet";
const MAIL_ALERT_MESSAGE = "Saisissez une adresse valide";
const SPECIAL_CHARACTERS = "^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ `";
const PASSWORD_ALERT_MESSAGE = (
  <>
    <p>Le mot de passe doit contenir: 8 caractères dont :
      <br />au moins 1 chiffre
      <br />au moins 1 majuscule
      <br />au moins 1 minuscule
      <br />au moins 1 caractère spécial : <strong>{ SPECIAL_CHARACTERS }</strong>
    </p>
  </>
);
const GENDER_ALERT_MESSAGE = "Indiquez votre genre";
const NamesInputWithTooltip = withValidationTooltip(RowInputs, NAMES_ALERT_MESSAGE, true);
const MailInputWithTooltip = withValidationTooltip(MailInput, MAIL_ALERT_MESSAGE);
const PasswordInputWithTooltip = withValidationTooltip(PasswordInput, PASSWORD_ALERT_MESSAGE);
const GenderInputWithTooltip = withValidationTooltip( GenderInput , GENDER_ALERT_MESSAGE);

class RegistrationForm extends Component {
  validToSubmit = () => {
    const { firstnameField, lastnameField, mailField, passwordField, genderField } = this.props;
    return [ 
      firstnameField, 
      lastnameField, 
      mailField, 
      passwordField, 
      genderField 
    ].filter(({ isValid }) => isValid === false).length === 0;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { firstnameField, lastnameField, mailField, passwordField, genderField, onSubmit } = this.props;
		onSubmit(firstnameField, lastnameField, mailField, passwordField, genderField);
  };

  render () {
    const { isLoading, firstnameField, lastnameField, mailField, passwordField, genderField, onChange, onBlur, onHover, onGenderClick, onPasswordClick } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
				<NamesInputWithTooltip showTooltip={ firstnameField.showTooltip || lastnameField.showTooltip }>
          <FirstnameInput id={ firstnameField.id }
                          value={ firstnameField.value }
                          isValid={ firstnameField.isValid }
                          onChange={ onChange }
                          onBlur={ onBlur }
                          onHover={ onHover } />
          <LastnameInput id={ lastnameField.id }
                         value={ lastnameField.value }
                         isValid={ lastnameField.isValid }
                         onChange={ onChange }
                         onBlur={ onBlur }
                         onHover={ onHover } />
        </NamesInputWithTooltip>
        <MailInputWithTooltip id={ mailField.id }
                              value={ mailField.value }
                              isValid={ mailField.isValid }
                              showTooltip={ mailField.showTooltip }
                              onChange={ onChange }
                              onBlur={ onBlur }
                              onHover={ onHover } />
        <PasswordInputWithTooltip id={ passwordField.id }
                                  value={ passwordField.value }
                                  isValid={ passwordField.isValid }
                                  isClear={ passwordField.isClear }
                                  showTooltip={ passwordField.showTooltip }
                                  onChange={ onChange }
                                  onBlur={ onBlur }
                                  onHover={ onHover } 
                                  onClick={ onPasswordClick } />
        <GenderInputWithTooltip id={ genderField.id }
                                value={ genderField.value }
                                isValid={ genderField.isValid }
                                showTooltip={ genderField.showTooltip }
                                onChange={ onChange }
                                onBlur={ onBlur }
                                onHover={ onHover } 
                                onClick={ onGenderClick } />
        <Button variant="success"
                type="submit"
                size="lg"
                disabled={ !this.validToSubmit() || isLoading }>
          { !isLoading ? "Je m'inscris gratuitement >" : "Inscription..." }
        </Button>
      </Form>
    );
  }
}

RegistrationForm.propTypes = {
	isLoading: bool,
  firstnameField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  lastnameField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  mailField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  passwordField: shape({ id: string, value: string, isValid: bool, isClear: bool, showTooltip: bool }).isRequired,
  genderField: shape({ id: string, value: string, isValid: bool, showTooltip: bool	}).isRequired,
	onGenderClick: func.isRequired,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
	onPasswordClick: func.isRequired,
	onSubmit: func.isRequired,
};

RegistrationForm.defaultProps = {
  isLoading : false,
};

export default RegistrationForm;
