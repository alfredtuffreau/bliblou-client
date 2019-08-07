import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import IdentificationForm from "../modules/ResetPassword";
import icon from "../images/mail.png";

import "./ResetPassword.css";

class ResetPassword extends Component {
  render () {
    return (
      <div className="ResetPassword">
        <Row>
          <Col md={{ span:6, offset:3 }}>
            <h2>{ formattedText("resetPassword.title") }</h2>
            <h3>{ formattedText("resetPassword.description") }</h3>
            <img src={ icon } alt="Mail" className="Icon" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span:4, offset:4 }}>
            <IdentificationForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResetPassword;
