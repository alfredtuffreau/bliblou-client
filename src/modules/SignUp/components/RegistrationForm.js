import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Button, Form } from "react-bootstrap";

import NamesInput from "../../../components/form/NamesInput";
import MailInput from "../../../components/form/MailInput";
import PasswordInput from "../../../components/form/PasswordInput";
import GenderInput from "../../../components/form/GenderInput";

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

  render () {
    const { 
      isLoading, firstname, lastname, mail, password, gender, 
      onFieldChange, validateField, onGenderClick, onPasswordClick 
    } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <NamesInput firstnameId={ firstname.id }
                    firstnameValue={ firstname.value }
                    isFirstnameValid={ firstname.isValid } 
                    lastnameId={ lastname.id }
                    lastnameValue={ lastname.value }
                    isLastnameValid={ lastname.isValid }
                    onChange={ onFieldChange }
                    onBlur={ validateField } />
        <MailInput { ...mail }
                              onChange={ onFieldChange }
                              onBlur={ validateField } />
        <PasswordInput { ...password }
                       onChange={ onFieldChange }
                       onBlur={ validateField }
                       onClick={ onPasswordClick } />
        <GenderInput { ...gender }
                     onChange={ onFieldChange }
                     onBlur={ validateField }
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
  firstname: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  lastname: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  mail: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
  password: shape({ id: string, value: string, isValid: bool, isClear: bool, showTooltip: bool }).isRequired,
  gender: shape({ id: string, value: string, isValid: bool, showTooltip: bool	}).isRequired,
	onGenderClick: func.isRequired,
	onFieldChange: func.isRequired,
	validateField: func.isRequired,
	onPasswordClick: func.isRequired,
	onSubmit: func.isRequired,
};

RegistrationForm.defaultProps = {
  isLoading : false,
};

export default RegistrationForm;
