import React, { Component } from "react";
import { object, shape, string, bool, func } from "prop-types";

import RegistrationForm  from "./RegistrationForm";
import ConfirmationForm from "./ConfirmationForm";

class SignUp extends Component {
	render() {
    const { newUser, isLoading, setValue, validate, toggleHover } = this.props;

		if (newUser) {
			const { confirmationCodeField, mailField: { value: mail }, passwordField: { value: password }, confirm, clear } = this.props;
			return <ConfirmationForm confirmationCodeField= { confirmationCodeField }
																mail={ mail }
																password={ password }
																isLoading={ isLoading }
																onChange={ setValue } 
																onBlur={ validate }
																onHover={ toggleHover }
																onSubmit={ confirm } 
																onUnmount={ clear } />;
		}

    const { firstnameField, lastnameField, mailField, passwordField, genderField, setValidValue, togglePasswordVisibility, signUp } = this.props;
		return <RegistrationForm firstnameField={ firstnameField }
					 									 lastnameField={ lastnameField }
				 										 mailField={ mailField }
														 passwordField={ passwordField }
														 genderField={ genderField }
														 isLoading={ isLoading } 
														 onGenderClick={ setValidValue }
														 onChange={ setValue } 
														 onBlur={ validate }
														 onHover={ toggleHover }
														 onPasswordClick={ togglePasswordVisibility } 
														 onSubmit={ signUp } />;	
	}
}

SignUp.propTypes = {
	newUser: object,
	isLoading: bool,
  firstnameField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  lastnameField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  mailField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  passwordField: shape({ id: string, value: string, isValid: bool, isClear: bool, showTooltip: bool }).isRequired,
  genderField: shape({ id: string, value: string, isValid: bool, showTooltip: bool	}).isRequired,
  confirmationCodeField: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	setValidValue: func.isRequired,
	setValue: func.isRequired,
	validate: func.isRequired,
	toggleHover: func.isRequired,
	togglePasswordVisibility: func.isRequired,
	signUp: func.isRequired,
	confirm: func.isRequired,
	clear: func.isRequired,
}

SignUp.defaultProps = {
	newUser: undefined,
	isLoading: false,
	confirmForm: undefined,
}

export default SignUp;