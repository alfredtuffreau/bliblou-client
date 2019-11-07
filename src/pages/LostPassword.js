import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import withScrollTop from "../components/view/withScrollTop";
import ResetPassword from "../modules/ResetPassword";
import { withNavbarAndBackground, withFooter } from "../modules/Navigation";

class LostPassword extends Component {
  render () {

    return (
      <div className="dark-panel">
        <Row className="content centered-content" noGutters>
          <Col md={{ span:6, offset:3 }}>
            <ResetPassword />
          </Col>
        </Row>
      </div>
    );
  }
}

export default [ 
  withScrollTop, 
  withNavbarAndBackground,
  withFooter,
].reduce((acc, op) => op(acc), LostPassword);
