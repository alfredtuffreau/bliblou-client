import React, { Component } from "react";
import { object, shape, string, bool, func } from "prop-types";

import RegistrationForm  from "./RegistrationForm";
import ConfirmationForm from "./ConfirmationForm";

class SignUp extends Component {
	render() {
    const { newUser, isLoading, setValue, validate, toggleHover } = this.props;

		if (newUser) {
			const { 
				confirmationCode, mail: { value: mail }, password: { value: password }, confirm, clear 
			} = this.props;
			return <ConfirmationForm confirmationCode= { confirmationCode }
															 mail={ mail }
															 password={ password }
															 isLoading={ isLoading }
															 onChange={ setValue } 
															 onBlur={ validate }
															 onHover={ toggleHover }
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
  firstname: shape({ id: string, value: string, isValid: bool, isHover: bool }).isRequired,
  lastname: shape({ id: string, value: string, isValid: bool, isHover: bool }).isRequired,
  mail: shape({ id: string, value: string, isValid: bool, isHover: bool }).isRequired,
  password: shape({ id: string, value: string, isValid: bool, isClear: bool, isHover: bool }).isRequired,
  gender: shape({ id: string, value: string, isValid: bool, isHover: bool	}).isRequired,
  confirmationCode: shape({ id: string, value: string, isValid: bool, isHover: bool }).isRequired,
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
}

export default SignUp;