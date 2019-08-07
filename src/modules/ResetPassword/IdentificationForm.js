import React, { Component } from "react";
import { string, func, bool } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form as BootstrapForm, Nav, Button } from "react-bootstrap";

import { formattedText } from "../../translations";

import "./Form.css";
import MailInput from "./components/MailInput";
import { resetPasswordForm } from "./selectors";
import { setIsLoading } from "./actions";

class IdentificationForm extends Component {
  validateForm = () => {
    return this.props.mail.length > 0;
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { mail, setIsLoading } = this.props;

    setIsLoading(true)
    
    try {
      alert(`Submitted: ${mail}`);
    } catch (err) {
      alert(err.message);
    }
    
    setIsLoading(false);
  };

  handleOnClick = () => {
    const { history } = this.props;
    history.goBack();
  }

  render () {
    const { isLoading  } = this.props;
    return (
      <BootstrapForm  onSubmit={ this.handleSubmit } className="ResetPassword">
        <MailInput />
        <Nav className="justify-content-end">
          <Nav.Item>
            <Button variant="link"
                    onClick={ this.handleOnClick }>
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
                  : formattedText("signIn.sendingEmail") }
            </Button>
          </Nav.Item>
        </Nav>
      </BootstrapForm>
    );
  }
}

IdentificationForm.propTypes = {
  mail: string,
  isLoading: bool,
  setIsLoading: func.isRequired,
};

IdentificationForm.defaultProps = {
  mail: '',
  isLoading : false,
};

const mapStateToProps = (state) => {
  const { mail, isLoading } = resetPasswordForm(state);
  return { mail, isLoading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setIsLoading }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IdentificationForm));
