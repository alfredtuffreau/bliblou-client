import React, { Component } from "react";
import { bool, shape, string, func } from "prop-types";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../../../translations";
import icon from "../../../images/mail.png";


import "./ResetPassword.css";
import IdentificationForm from "./IdentificationForm";

class ResetPassword extends Component {
  render() {
    const { 
      isSent, mail, isLoading, setValue, validate, toggleHover, startReset, cancel 
    } = this.props;

    return (
      <Row className="ResetPassword">
        <h2>{ formattedText("resetPassword.title") }</h2>
        <h3>
          { !isSent
              ? formattedText("resetPassword.descriptionNotSent")
              : formattedText("resetPassword.descriptionSent") }
        </h3>
        { !isSent
            ? <img src={ icon } alt="Mail" className="Icon" />
            : <></> }
        <Col md={{ span:8, offset:2 }}>
          { !isSent 
            ? <IdentificationForm mail={ mail }
                                  isLoading={ isLoading } 
                                  onChange={ setValue } 
                                  onBlur={ validate }
                                  onHover={ toggleHover }
                                  onSubmit={ startReset }
                                  onCancel={ cancel } />
            : <div /> }
        </Col>
      </Row>
      
    );
  }
}

ResetPassword.propTypes = {
  isSent: bool,
  mail: shape({ value: string, isValid: bool, showTooltip: bool }),
  isLoading: bool,
  setValue: func.isRequired,
  validate: func.isRequired,
  toggleHover: func.isRequired,
  startReset: func.isRequired,
  cancel: func.isRequired,
};

ResetPassword.defaultProps = {
  isSent: false,
  mail: undefined,
  isLoading: false,
};

export default ResetPassword;
