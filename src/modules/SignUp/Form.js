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
import { setIsLoading } from "./actions";

class Form extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      firstname, lastname, mail, password, gender, setIsLoading, signUp
    } = this.props;

    setIsLoading(true);
    try {
      await signUp(firstname, lastname, mail, password, gender);
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
  lastname: string,
  mail: string,
  password: string,
  gender: string,
  isLoading: bool,
  setIsLoading: func.isRequired,
  signUp: func.isRequired,
};

Form.defaultProps = {
  firstname: "",
  lastname: "",
  mail: "",
  password: "",
  gender: "",
  isLoading : false,
};

const mapStateToProps = (state) => {
  const { firstname, lastname, mail, password, gender, isLoading } = signUpForm(state);
  return { firstname, lastname, mail, password, gender, isLoading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setIsLoading }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
