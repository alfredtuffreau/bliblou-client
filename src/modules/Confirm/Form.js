import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./Form.css";
import { confirmForm } from "./selectors";
import { setIsLoading, setConfirmationCode, clear } from "./actions";

class Form extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setConfirmationCode } = this.props;
    setConfirmationCode(value);
  }

  handleSubmit = async (event) => {
    const {
      mail, password, confirmationCode, setIsLoading, confirm, clear
    } = this.props;

    event.preventDefault();
    setIsLoading(true);

    try {
      await confirm(mail, password, confirmationCode);
      clear();
    } catch (err) {
      alert(err.message);
    }

    setIsLoading(false);
  };

  render () {
    const { confirmationCode, isLoading } = this.props;
    const label = "Code de vérification";

    return (
      <BootstrapForm onSubmit={ this.handleSubmit } className="Confirm">
        <BootstrapForm.Group controlId="confirmationCode" bsSize="large">
          <BootstrapForm.Label hidden>{ label }</BootstrapForm.Label>
          <BootstrapForm.Control
            autoFocus
            type="tel"
            value={ confirmationCode }
            placeholder={ label }
            onChange={ (e) => this.handleOnChange(e) }
            required />
          <BootstrapForm.Text className="help">
            Consultez votre boîte mail pour le code de vérification
          </BootstrapForm.Text>
        </BootstrapForm.Group>
        { isLoading
          ? (<Button variant="success" type="submit" size="lg" disabled>
               Verification...
             </Button>)
          : (<Button variant="success" type="submit" size="lg">
               Vérifier
             </Button>)}
      </BootstrapForm>
    );
  }
}

Form.propTypes = {
  mail: string,
  password: string,
  confirmationCode: string,
  isLoading: bool,
  setConfirmationCode: func.isRequired,
  setIsLoading: func.isRequired,
  confirm: func.isRequired,
  clear: func.isRequired,
};

Form.defaultProps = {
  mail: "",
  password: "",
  confirmationCode: "",
  isLoading : false,
};

const mapStateToProps = (state) => {
  const { mail, password, confirmationCode, isLoading } = confirmForm(state);
  return { mail, password, confirmationCode, isLoading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setIsLoading, setConfirmationCode, clear }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
