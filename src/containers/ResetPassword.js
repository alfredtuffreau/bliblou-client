import React, { Component } from "react";
import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";

import { formattedText } from "../translations";
import IdentificationForm, { resetPasswordForm } from "../modules/ResetPassword";
import icon from "../images/mail.png";

import "./ResetPassword.css";

class ResetPassword extends Component {
  forgotPassword = async (email) => {
    try {
      await Auth.forgotPassword(email);
    } catch (err) {
      if (err.code !== "UserNotFoundException") {
        throw err;
      }
    }
  };

  render () {
    const { isSent } = this.props;

    return (
      <div className="ResetPassword">
        <Row>
          <Col md={{ span:6, offset:3 }}>
            <h2>{ formattedText("resetPassword.title") }</h2>
            <h3>{ !isSent
              ? formattedText("resetPassword.descriptionNotSent")
              : formattedText("resetPassword.descriptionSent") }</h3>
            { !isSent
              ? <img src={ icon } alt="Mail" className="Icon" />
              : <div /> }
          </Col>
        </Row>
        <Row>
          <Col md={{ span:4, offset:4 }}>
            { !isSent 
              ? <IdentificationForm forgotPassword={ this.forgotPassword } />
              : <div /> }
          </Col>
        </Row>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  isSent: bool,
}

ResetPassword.defaultProps = {
  isSent: false,
}

const mapStateToProps = (state) => {
  const { isSent } = resetPasswordForm(state);
  return ({ isSent });
}

export default connect(mapStateToProps, null)(ResetPassword);
