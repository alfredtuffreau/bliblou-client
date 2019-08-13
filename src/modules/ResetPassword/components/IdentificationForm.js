import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Nav, Button } from "react-bootstrap";

import { formattedText } from "../../../translations";
import MailInput from "../../../components/form/MailInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const MAIL_ALERT_MESSAGE = "Saisissez une adresse valide";
const MailInputWithTooltip = withValidationTooltip(MailInput, MAIL_ALERT_MESSAGE);

class IdentificationForm extends Component {
  validateForm = () => {
    return this.props.mail.isValid;
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { mail, onSubmit } = this.props;
    onSubmit(mail.value);
  };

  handleOnCancel = () => {
    const { onCancel, history } = this.props;
    onCancel(() => history.goBack());
  }

  render () {
    const { mail, onChange, onBlur, onHover, isLoading  } = this.props;

    return (
      <Form  onSubmit={ this.handleOnSubmit }>
        <MailInputWithTooltip mail={ mail } 
															showTooltip={ mail.showTooltip }
															onChange={ onChange } 
															onBlur={ onBlur }
															onHover={ onHover } />
        <Nav className="justify-content-end">
          <Nav.Item>
            <Button variant="link"
                    onClick={ this.handleOnCancel }>
              { formattedText("resetPassword.cancel") }
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="success"
                    type="submit"
                    size="lg"
                    disabled={ !this.validateForm() || isLoading }>
              { !isLoading
                  ? formattedText("resetPassword.sendEmail")
                  : formattedText("resetPassword.sendingEmail") }
            </Button>
          </Nav.Item>
        </Nav>
      </Form>
    );
  }
}

IdentificationForm.propTypes = {
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
	isLoading: bool,
	onChange: func.isRequired,
	onBlur: func.isRequired,
  onHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

IdentificationForm.defaultProps = {
  mail: { value: "", isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(IdentificationForm);
