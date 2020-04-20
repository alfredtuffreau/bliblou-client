import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import ConfirmationCodeInput from "../../../components/form/ConfirmationCodeInput";

class ConfirmationForm extends Component {
  componentWillUnmount() {
    this.props.onUnmount();
  };

  validToSubmit = () => {
    const { confirmationCode } =  this.props;
    return confirmationCode.isValid !== false;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, password, confirmationCode, onSubmit, history } = this.props;
		onSubmit(mail, password, confirmationCode, history);
  };

  render () {
    const { 
      confirmationCode, 
      onFieldChange,  
      validateField, 
      isLoading 
    } = this.props;
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <ConfirmationCodeInput { ...confirmationCode }
                               onChange={ onFieldChange }
                               onBlur={ validateField } />
				<Button variant="success"
                type="submit"
                size="lg"
                disabled={ !this.validToSubmit() || isLoading }>
          { !isLoading ? "Vérifier >" : "Vérification..." }
        </Button>
      </Form>
    );
  }
}

ConfirmationForm.propTypes = {
	isLoading: bool,
  confirmationCode: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	mail: string.isRequired,
	password: string.isRequired,
	onFieldChange: func.isRequired,
	validateField: func.isRequired,
  onSubmit: func.isRequired,
  onUnmount: func.isRequired,
};

ConfirmationForm.defaultProps = {
  isLoading : false,
};

export default withRouter(ConfirmationForm);
