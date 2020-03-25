import React, { Component } from "react";
import { object, bool, func } from "prop-types";

import RegistrationForm  from "./RegistrationForm";
import ConfirmationForm from "./ConfirmationForm";

class SignUp extends Component {
	render() {
    const { newUser, isLoading, setValue, validate, toggleHover } = this.props;

		if (newUser) {
			const { 
				confirmForm, signUpForm: { mail, password }, confirm, clear 
			} = this.props;

		  return (
				<ConfirmationForm { ...confirmForm } 
													mail={ mail.value }
													password={ password.value }
													isLoading={ isLoading }
													onChange={ setValue } 
													onBlur={ validate }
													onHover={ toggleHover }
													onSubmit={ confirm } 
													onUnmount={ clear } />
			);
		} 
		
		const { 
			signUpForm, setValidValue, togglePasswordVisibility, signUp
		} = this.props;

		return (
			<RegistrationForm { ...signUpForm } 
												isLoading={ isLoading } 
												onGenderClick={ setValidValue }
												onChange={ setValue } 
												onBlur={ validate }
												onHover={ toggleHover }
												onPasswordClick={ togglePasswordVisibility } 
												onSubmit={ signUp } />
		);	
	}
}

SignUp.propTypes = {
	newUser: object,
	isLoading: bool,
	signUpForm: object,
	confirmForm: object,
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
	signUpForm: undefined,
	confirmForm: undefined,
}

export default SignUp;