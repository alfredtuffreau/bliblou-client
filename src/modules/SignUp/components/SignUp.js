import React, { Component } from "react";
import { object, bool, func } from "prop-types";

import "./SignUp.css";
import RegistrationForm  from "./RegistrationForm";
import ConfirmationForm from "./ConfirmationForm";

class SignUp extends Component {
	render() {
    const { newUser, isLoading, setValue } = this.props;

		if (newUser) {
			const { 
				signUpForm: { mail, password }, confirmForm: { confirmationCode }, confirm 
			} = this.props;

		  return (
				<ConfirmationForm mail={ mail.value }
													password={ password.value }
													confirmationCode={ confirmationCode.value }
													isLoading={ isLoading }
													onChange={ setValue } 
													onSubmit={ confirm } />
			);
		} 
		
		const { 
			signUpForm, setValidValue, validate, toggleHover, togglePasswordVisibility, signUp
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
	setValidValue: func.isRequired,
	setValue: func.isRequired,
	validate: func.isRequired,
	toggleHover: func.isRequired,
	togglePasswordVisibility: func.isRequired,
	signUp: func.isRequired,
	confirm: func.isRequired,
}

SignUp.defaultProps = {
	newUser: undefined,
	isLoading: false,
	signUpForm: undefined,
}

export default SignUp;