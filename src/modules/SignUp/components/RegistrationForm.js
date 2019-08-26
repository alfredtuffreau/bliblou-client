import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Button, Form } from "react-bootstrap";

import NamesInput from "../../../components/form/NamesInput";
import MailInput from "../../../components/form/MailInput";
import PasswordInput from "../../../components/form/PasswordInput";
import GenderInput from "../../../components/form/GenderInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const NAME_ALERT_MESSAGE = "Saisissez votre nom complet";
const MAIL_ALERT_MESSAGE = "Saisissez une adresse valide";
const SPECIAL_CHARACTERS = "^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ `";
const PASSWORD_ALERT_MESSAGE = (
  <div>
    <div className="message">Le mot de passe doit contenir:</div>
    <ul>
      <li>8 caractères</li>
      <li>au moins 1 chiffre</li>
      <li>au moins 1 majuscule</li>
      <li>au moins 1 minuscule</li>
      <li>au moins 1 caractère spécial :<br /><strong>{ SPECIAL_CHARACTERS }</strong></li>
    </ul>
  </div>
);
const GENDER_ALERT_MESSAGE = "Indiquez votre genre";
const NameInputWithTooltip = withValidationTooltip(NamesInput, NAME_ALERT_MESSAGE, true);
const MailInputWithTooltip = withValidationTooltip(MailInput, MAIL_ALERT_MESSAGE);
const PasswordInputWithTooltip = withValidationTooltip(PasswordInput, PASSWORD_ALERT_MESSAGE);
const GenderInputWithTooltip = withValidationTooltip( GenderInput , GENDER_ALERT_MESSAGE);

class RegistrationForm extends Component {
  validToSubmit = () => {
    const invalidFields = [
      this.props.firstname, 
			this.props.lastname, 
			this.props.mail,
			this.props.password,
      this.props.gender 
    ].filter(({ isValid }) => isValid === false);
    return invalidFields.length === 0;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { firstname, lastname, mail, password, gender, onSubmit } = this.props;
		onSubmit(firstname, lastname, mail, password, gender);
  };

  render () {
    const { 
			isLoading, 
			firstname, 
			lastname, 
			mail,
			password,
			gender,
			onChange, 
			onBlur, 
      onHover,
      onGenderClick,
			onPasswordClick,
		} = this.props;

    return (
      <Form onSubmit={ this.handleOnSubmit } className="SignUp">
				<NameInputWithTooltip firstname={ firstname } 
															lastname={ lastname } 
															showTooltip={ firstname.showTooltip || lastname.showTooltip }
															onChange={ onChange } 
															onBlur={ onBlur }
															onHover={ onHover } />
        <MailInputWithTooltip mail={ mail } 
															showTooltip={ mail.showTooltip }
															onChange={ onChange } 
															onBlur={ onBlur }
															onHover={ onHover } />
				<PasswordInputWithTooltip password={ password }
																	showTooltip={ password.showTooltip } 
																	onChange={ onChange } 
																	onBlur={ onBlur }
																	onHover={ onHover } 
																	onClick={ onPasswordClick } />
        <GenderInputWithTooltip gender={ gender } 
																showTooltip={ gender.showTooltip } 
																onClick= { onGenderClick }
																onChange={ onChange } 
																onBlur={ onBlur } 
																onHover={ onHover } />
        <Button variant="success"
                type="submit"
                size="lg"
                disabled={ !this.validToSubmit() || isLoading }>
          { !isLoading
              ? "Je m'inscris gratuitement >"
              : "Inscription..." }
        </Button>
      </Form>
    );
  }
}

RegistrationForm.propTypes = {
  firstname: shape({ value: string, isValid: bool, showTooltip: bool }),
  lastname: shape({ value: string, isValid: bool, showTooltip: bool }),
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
  password: shape({ value: string, isValid: bool, showTooltip: bool }),
  gender: shape({ value: string, isValid: bool, showTooltip: bool	}),
	isLoading: bool,
	onGenderClick: func.isRequired,
	onChange: func.isRequired,
	onBlur: func.isRequired,
	onHover: func.isRequired,
	onPasswordClick: func.isRequired,
	onSubmit: func.isRequired,
};

RegistrationForm.defaultProps = {
  firstname: { value: "", isValid: undefined, showTooltip: false },
  lastname: { value: "", isValid: undefined, showTooltip: false },
  mail: { value: "", isValid: undefined, showTooltip: false },
  password: { value: "", isValid: undefined, showTooltip: false },
  gender: { value: "", isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default RegistrationForm;
