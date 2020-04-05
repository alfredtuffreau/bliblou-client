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
    <p>Le mot de passe doit contenir 8 caractères dont :
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
    const { firstname, lastname, mail, password, gender } = this.props;
    return [ firstname, lastname, mail, password, gender ].filter(({ isValid }) => isValid === false)
                                                          .length === 0;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { firstname, lastname, mail, password, gender, onSubmit } = this.props;
		onSubmit(firstname, lastname, mail, password, gender);
  };

  isHoverAndInvalid = (input) => {
    return input.isHover && input.isValid === false;
  }

  render () {
    const { 
      isLoading, 
      firstname, 
      lastname, 
      mail, 
      password, 
      gender, 
      onFieldChange: onChange, 
      onFieldBlur: onBlur, 
      onFieldHover: onHover, 
      onGenderClick, 
      onPasswordClick 
    } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <NamesInputWithTooltip isValid={ firstname.isValid !== false && lastname.isValid !== false } 
                               isHover={ this.isHoverAndInvalid(firstname) || this.isHoverAndInvalid(lastname) }>
          <FirstnameInput { ...firstname, onChange, onBlur, onHover } />
          <LastnameInput { ...lastname, onChange, onBlur, onHover } />
        </NamesInputWithTooltip>
        <MailInputWithTooltip { ...mail, onChange, onBlur, onHover } />
        <PasswordInputWithTooltip { ...password, onChange, onBlur, onHover } onClick={ onPasswordClick } />
        <GenderInputWithTooltip { ...gender, onChange, onBlur, onHover } onClick={ onGenderClick } />
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
  firstname: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  lastname: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  mail: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  password: shape({ id: string, value: string, isValid: bool, isClear: bool, showTooltip: bool }).isRequired,
  gender: shape({ id: string, value: string, isValid: bool, showTooltip: bool	}).isRequired,
	onGenderClick: func.isRequired,
	onFieldChange: func.isRequired,
	onFieldBlur: func.isRequired,
	onFieldHover: func.isRequired,
	onPasswordClick: func.isRequired,
	onSubmit: func.isRequired,
};

RegistrationForm.defaultProps = {
  isLoading : false,
};

export default RegistrationForm;
