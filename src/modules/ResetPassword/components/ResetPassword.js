import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Row, Col } from "react-bootstrap";

import icon from "../../../images/mail.png";

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
        <p>Saisissez le code de vérification qui vous a été envoyé pour confirmer votre inscription.</p>
        <p>
          <small>Un second code vous sera envoyé pour définir votre nouveau mot de passe</small>
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
 
      description = <p>Saisissez votre nouveau mot de passe et le code de vérification qui vous a été envoyé par email.</p>;
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

      description = <p>Nous vous enverrons les instructions de réinitialisation de votre mot de passe par email.</p>;
      img = <img src={ icon } className="icon large" alt="Mail" />;
      form = <IdentificationForm mail={ mail }
                                 isLoading={ isLoading } 
                                 onChange={ setValue } 
                                 onBlur={ validate }
                                 onHover={ toggleHover }
                                 onSubmit={ startReset }
                                 onCancel={ cancel } />;
    }

    return (
      <>
        <h2>Mot de passe oublié</h2>
        { description }
        { img }
        <Row>
          <Col md={{ span:8, offset:2 }}>{ form }</Col>
        </Row>
      </>
      
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
