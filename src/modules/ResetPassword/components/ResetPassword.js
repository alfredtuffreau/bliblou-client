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
        <p>{ formattedText("resetPassword.descriptionCompleteSignUp") }</p>
        <p>
          <small>{ formattedText("resetPassword.hintCompleteSignUp") }</small>
        </p>
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
 
      description = <p>{ formattedText("resetPassword.descriptionSent") }</p>;
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

      description = <p>{ formattedText("resetPassword.descriptionNotSent") }</p>;
      img = <img src={ icon } alt="Mail" />;
      form = <IdentificationForm mail={ mail }
                                 isLoading={ isLoading } 
                                 onChange={ setValue } 
                                 onBlur={ validate }
                                 onHover={ toggleHover }
                                 onSubmit={ startReset }
                                 onCancel={ cancel } />;
    }

    return (
      <div className="ResetPassword">
        <h2>{ formattedText("resetPassword.title") }</h2>
        { description }
        { img }
        <Col md={{ span:8, offset:2 }}>
          { form }
        </Col>
      </div>
      
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
