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
    const { mail, onChange, onBlur, onHover, isLoading  } = this.props;
console.log(mail)
    return (
      <Form onSubmit={ this.handleOnSubmit }>
        <MailInputWithTooltip { ...mail } 
															onChange={ onChange } 
															onBlur={ onBlur }
															onHover={ onHover } />
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
	onChange: func.isRequired,
	onBlur: func.isRequired,
  onHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

IdentificationForm.defaultProps = {
  isLoading : false,
};

export default withRouter(IdentificationForm);
