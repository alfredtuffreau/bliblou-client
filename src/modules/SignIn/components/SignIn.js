import React, { Component } from "react";
import { shape, string, func, bool } from "prop-types";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import MailInput from "../../../components/form/MailInput";
import PasswordInput from "../../../components/form/PasswordInput";

import { LOST_PASSWORD } from "../../../modules/Navigation";

class SignIn extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    const { mail, password, onSubmit, history } = this.props;
    onSubmit(mail.value, password.value, history);
  }

  render () {
    const { 
      isLoading, mail, password, setValue, togglePasswordVisibility 
    } = this.props;

    return (
      <Form  onSubmit={ this.handleOnSubmit }>
        <MailInput id="mail"
                   { ...mail } 
                   onChange={ setValue } />
        <PasswordInput id="password"
                       { ...password }
                       withLinkTo={ LOST_PASSWORD }
                       onChange={ setValue } 
                       onClick={ togglePasswordVisibility }/>
        <Button variant="success"
                type="submit"
                size="lg"
                disabled={ isLoading }>
          { !isLoading ? "Se connecter >" : "Connexion..." }
        </Button>
      </Form>
    );
  }
}

SignIn.propTypes = {
  mail: shape({ value: string }),
  password: shape({ value: string, isClear: bool }),
  isLoading: bool,
  setValue: func.isRequired,
  togglePasswordVisibility: func.isRequired,
  onSubmit: func.isRequired,
};

SignIn.defaultProps = {
  mail: { value: "" },
  password: { value: "", isClear: false },
  isLoading : false,
};

export default withRouter(SignIn);
