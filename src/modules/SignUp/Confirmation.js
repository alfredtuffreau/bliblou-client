import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Button, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./Form.css";
import { signUpForm } from "./selectors";
import { setIsLoading, setConfirmationCode, clearForms } from "./actions";

class Confirmation extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setConfirmationCode } = this.props;
    setConfirmationCode(value);
  }

  handleConfirmationSubmit = async (event) => {
    const {
      mail, password, confirmationCode, setIsLoading, confirm, clearForms
    } = this.props;

    event.preventDefault();

    setIsLoading(true);
    try {
      await confirm(mail, password, confirmationCode);
      clearForms();
    } catch (err) {
      alert(err.message);
    }
    setIsLoading(false);
  };

  render () {
    const { confirmationCode, isLoading } = this.props;
    const label = "Code de vérification";

    return (
      <Form onSubmit={ this.handleConfirmationSubmit } className="SignUp">
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label hidden>{ label }</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={ confirmationCode }
            placeholder={ label }
            onChange={ (e) => this.handleOnChange(e) }
            required />
          <Form.Text className="help">
            Consultez votre boite email pour le code de confirmation
          </Form.Text>
        </Form.Group>
        { isLoading
          ? (<Button variant="success" type="submit" size="lg" disabled>
               Verification...
             </Button>)
          : (<Button variant="success" type="submit" size="lg">
               Vérifier
             </Button>)}
      </Form>
    );
  }
}

Confirmation.propTypes = {
  mail: string,
  password: string,
  confirmationCode: string,
  isLoading: bool,
  setConfirmationCode: func.isRequired,
  setIsLoading: func.isRequired,
  confirm: func.isRequired,
  clearForms: func.isRequired,
};

Confirmation.defaultProps = {
  mail: "",
  password: "",
  confirmationCode: "",
  isLoading : false,
};

const mapStateToProps = (state) => {
  const { mail, password, confirmationCode, isLoading } = signUpForm(state);
  return { mail, password, confirmationCode, isLoading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setIsLoading, setConfirmationCode, clearForms }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
