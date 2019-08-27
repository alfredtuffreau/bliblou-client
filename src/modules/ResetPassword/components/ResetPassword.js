import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../../../translations";
import icon from "../../../images/mail.png";

import "./ResetPassword.css";
import IdentificationForm from "./IdentificationForm";
import NewPasswordForm from "./NewPasswordForm";
import CompleteSignUpForm from "./CompleteSignUpForm";

class ResetPassword extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    const { 
      needConfirmSignUp, isSent, mail, isLoading, setValue, validate, toggleHover, cancel 
    } = this.props;
    
    let description, img, form;

    if (needConfirmSignUp) {
      const { signUpCode, validateSignUp } = this.props;
      description = (<>
        <h3>{ formattedText("resetPassword.descriptionCompleteSignUp") }</h3>
        <h3>
          <small>{ formattedText("resetPassword.hintCompleteSignUp") }</small>
        </h3>
      </>);
      img = <></>;
      form = <CompleteSignUpForm mail={ mail }
                                 signUpCode={ signUpCode }
                                 isLoading={ isLoading }
                                 onChange={ setValue } 
                                 onBlur={ validate }
                                 onHover={ toggleHover }
                                 onSubmit={ validateSignUp }
                                 onCancel={ cancel } />;
    } else if (isSent) {
      const { 
        confirmationCode, password, togglePasswordVisibility, validateReset 
      } = this.props;
 
      description = <h3>{ formattedText("resetPassword.descriptionSent") }</h3>;
      img = <></>;
      form = <NewPasswordForm mail={ mail }
                              confirmationCode={ confirmationCode }
                              password={ password }
                              isLoading={ isLoading }
                              onChange={ setValue } 
                              onBlur={ validate }
                              onHover={ toggleHover }
                              onPasswordClick={ togglePasswordVisibility }
                              onSubmit={ validateReset }
                              onCancel={ cancel } />;
    } else {
      const { startReset } = this.props;

      description = <h3>{ formattedText("resetPassword.descriptionNotSent") }</h3>;
      img = <img src={ icon } alt="Mail" className="Icon" />;
      form = <IdentificationForm mail={ mail }
                                 isLoading={ isLoading } 
                                 onChange={ setValue } 
                                 onBlur={ validate }
                                 onHover={ toggleHover }
                                 onSubmit={ startReset }
                                 onCancel={ cancel } />;
    }

    return (
      <Row className="ResetPassword" noGutters>
        <h2>{ formattedText("resetPassword.title") }</h2>
        { description }
        { img }
        <Col md={{ span:8, offset:2 }}>
          { form }
        </Col>
      </Row>
      
    );
  }
}

ResetPassword.propTypes = {
  needConfirmSignUp: bool,
  isSent: bool,
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
  signUpCode: shape({ value: string, isValid: bool, showTooltip: bool }),
  confirmationCode: shape({ value: string, isValid: bool, showTooltip: bool }),
  password: shape({ value: string, isValid: bool, showTooltip: bool }),
  isLoading: bool,
  init: func.isRequired,
  setValue: func.isRequired,
  validate: func.isRequired,
  toggleHover: func.isRequired,
  togglePasswordVisibility: func.isRequired,
  startReset: func.isRequired,
  validateSignUp: func.isRequired,
  validateReset: func.isRequired,
  cancel: func.isRequired,
};

ResetPassword.defaultProps = {
  needConfirmSignUp: false,
  isSent: false,
  mail: undefined,
  confirmationCode: undefined,
  password: undefined,
  isLoading: false,
};

export default ResetPassword;
