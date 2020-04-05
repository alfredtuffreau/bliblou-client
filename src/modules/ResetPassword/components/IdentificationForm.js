import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import MailInput from "../../../components/form/MailInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const MAIL_ALERT_MESSAGE = "Saisissez une adresse valide";
const MailInputWithTooltip = withValidationTooltip(MailInput, MAIL_ALERT_MESSAGE);

class IdentificationForm extends Component {
  validToSubmit = () => {
    const { mail } =  this.props;
    return mail.isValid !== false;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, onSubmit } = this.props;
    onSubmit(mail);
  };

  handleOnCancel = () => {
    const { onCancel, history } = this.props;
    onCancel(() => history.goBack());
  }

  render () {
    const { mail, onFieldChange, onFieldBlur, onFieldHover, isLoading  } = this.props;
console.log(mail)
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <MailInputWithTooltip { ...mail } 
															onChange={ onFieldChange } 
															onBlur={ onFieldBlur }
															onHover={ onFieldHover } />
        <div className="form-buttons">
          <Button variant="link"
                  onClick={ this.handleOnCancel }>
            Annuler
          </Button>
          <Button variant="success"
                  type="submit"
                  size="lg"
                  disabled={ !this.validToSubmit() || isLoading }>
            { !isLoading ? "Réinitialiser >" : "Envoi..." }
          </Button>
        </div>
      </Form>
    );
  }
}

IdentificationForm.propTypes = {
	isLoading: bool,
  mail: shape({ id: string, value: string, isValid: bool, showTooltip: bool }).isRequired,
	onFieldChange: func.isRequired,
	onFieldBlur: func.isRequired,
  onFieldHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

IdentificationForm.defaultProps = {
  isLoading : false,
};

export default withRouter(IdentificationForm);
