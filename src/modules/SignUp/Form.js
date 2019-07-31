import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./Form.css";
import NamesInput from "./components/NamesInput";
import MailInput from "./components/MailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
// import BirthDateInput from "./components/BirthDateInput";
import { signUpForm } from "./selectors";
import { 
  setIsLoading,
  setFirstnameValidity,
  setLastnameValidity,
  setMailValidity,
  setPasswordValidity,
  setGenderValidity,
  clear,
} from "./actions";

class Form extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      firstname, 
      isFirstnameValid,
      setFirstnameValidity, 
      lastname, 
      isLastnameValid,
      setLastnameValidity, 
      mail, 
      isMailValid,
      setMailValidity, 
      password, 
      isPasswordValid, 
      setPasswordValidity,
      gender, 
      isGenderValid, 
      setGenderValidity,
      setIsLoading, 
      signUp,
      clear,
    } = this.props;

    if (!isFirstnameValid || !isLastnameValid || !isMailValid || !isPasswordValid || !isGenderValid) {
      if (isFirstnameValid === undefined) setFirstnameValidity(false);
      if (isLastnameValid === undefined) setLastnameValidity(false);
      if (isMailValid === undefined) setMailValidity(false);
      if (isPasswordValid === undefined) setPasswordValidity(false);
      if (isGenderValid === undefined) setGenderValidity(false);
      return;
    }

    setIsLoading(true);
    try {
      await signUp(firstname, lastname, mail, password, gender);
      clear();
    } catch (err) {
      alert(err.message);
    }
    setIsLoading(false);
  };

  render () {
    const { isLoading } = this.props;

    return (
      <BootstrapForm onSubmit={ this.handleSubmit } className="SignUp">
        <NamesInput />
        <MailInput />
        <PasswordInput />
        <GenderInput />
        {/* TODO implement/add <BirthDateInput /> */}
        { isLoading
          ? (<Button variant="success" type="submit" size="lg" disabled>
               Inscription...
             </Button>)
          : (<Button variant="success" type="submit" size="lg">
               Je m'inscris gratuitement >
             </Button>)}
      </BootstrapForm>
    );
  }
}

Form.propTypes = {
  firstname: string,
  isFirstnameValid: bool,
  lastname: string,
  isLastnameValid: bool,
  mail: string,
  isMailValid: bool,
  password: string,
  isPasswordValid: bool,
  gender: string,
  isGenderValid: bool,
  isLoading: bool,
  setIsLoading: func.isRequired,
  setFirstnameValidity: func.isRequired,
  setLastnameValidity: func.isRequired,
  setMailValidity: func.isRequired,
  setPasswordValidity: func.isRequired,
  setGenderValidity: func.isRequired,
  signUp: func.isRequired,
  clear: func.isRequired,
};

Form.defaultProps = {
  firstname: "",
  isFirstnameValid: undefined,
  lastname: "",
  isLastnameValid: undefined,
  mail: "",
  isMailValid: undefined,
  password: "",
  isPasswordValid: undefined,
  gender: "",
  isGenderValid: undefined,
  isLoading : false,
};

const mapStateToProps = (state) => {
  const { 
    firstname,
    isFirstnameValid, 
    lastname,
    isLastnameValid,
    mail, 
    isMailValid, 
    password, 
    isPasswordValid,
    gender, 
    isGenderValid, 
    isLoading 
  } = signUpForm(state);
  
  return ({ 
    firstname, 
    isFirstnameValid,
    lastname, 
    isLastnameValid,
    mail, 
    isMailValid,
    password, 
    isPasswordValid,
    gender, 
    isGenderValid,
    isLoading 
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setIsLoading,
    setFirstnameValidity, 
    setLastnameValidity,
    setMailValidity,
    setPasswordValidity,
    setGenderValidity,
    clear,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
