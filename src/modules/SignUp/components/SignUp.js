import React, { Component } from "react";
import { object, shape, string, bool, func } from "prop-types";

import RegistrationForm  from "./RegistrationForm";
import ConfirmationForm from "./ConfirmationForm";

class SignUp extends Component {
	render() {
    const { newUser, isLoading, setValue, validate } = this.props;

		if (newUser) {
			const { 
				confirmationCode, newUser: { mail , password }, confirm, clear 
			} = this.props;
			return <ConfirmationForm confirmationCode= { confirmationCode }
															 mail={ mail }
															 password={ password }
															 isLoading={ isLoading }
															 onFieldChange={ setValue }
															 validateField={ validate }
															 onSubmit={ confirm } 
															 onUnmount={ clear } />;
		}

    const { 
			firstname, lastname, mail, password, gender, setValidValue, togglePasswordVisibility, signUp
		} = this.props;
		return <RegistrationForm firstname={ firstname }
											 			 lastname={ lastname }
														 mail={ mail }
														 password={ password }
														 gender={ gender }
														 isLoading={ isLoading } 
														 onGenderClick={ setValidValue }
														 onFieldChange={ setValue } 
														 validateField={ validate }
														 onPasswordClick={ togglePasswordVisibility } 
														 onSubmit={ signUp } />;	
	}
}

SignUp.propTypes = {
	newUser: object,
	isLoading: bool,
  firstname: shape({ id: string, value: string, isValid: bool }).isRequired,
  lastname: shape({ id: string, value: string, isValid: bool }).isRequired,
  mail: shape({ id: string, value: string, isValid: bool }).isRequired,
  password: shape({ id: string, value: string, isValid: bool, isClear: bool }).isRequired,
  gender: shape({ id: string, value: string, isValid: bool }).isRequired,
  confirmationCode: shape({ id: string, value: string, isValid: bool }).isRequired,
	setValidValue: func.isRequired,
	setValue: func.isRequired,
	validate: func.isRequired,
	togglePasswordVisibility: func.isRequired,
	signUp: func.isRequired,
	confirm: func.isRequired,
	clear: func.isRequired,
}

SignUp.defaultProps = {
	newUser: undefined,
	isLoading: false,
}

export default SignUp;