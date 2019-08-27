import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ResetPassword from "../modules/ResetPassword";

import "./LostPassword.css";

class LostPassword extends Component {
  render () {

    return (
      <div className="LostPassword">
        <Row noGutters>
          <Col md={{ span:6, offset:3 }}>
            <ResetPassword />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LostPassword;
