import React, { Component } from "react";
// import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";
// import { connect } from "react-redux";
// import { Auth } from "aws-amplify";

// import { formattedText } from "../translations";
// import IdentificationForm, { resetPasswordForm } from "../modules/ResetPassword";

import ResetPassword from "../modules/ResetPassword";

import "./LostPassword.css";

class LostPassword extends Component {
  render () {

    return (
      <div className="LostPassword">
        <Row>
          <Col md={{ span:6, offset:3 }}>
            <ResetPassword />
          </Col>
        </Row>
      </div>
    );
  }
}

// ResetPassword.propTypes = {
//   isSent: bool,
// }

// ResetPassword.defaultProps = {
//   isSent: false,
// }

// const mapStateToProps = (state) => {
//   const { isSent } = resetPasswordForm(state);
//   return ({ isSent });
// }

export default /* connect(mapStateToProps, null)( */LostPassword/* ) */;
