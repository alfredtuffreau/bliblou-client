import React from "react";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import withScrollTop from "../components/view/withScrollTop";
import SignIn from "../modules/SignIn";

const Login = () => (
  <div className="with-background-image">
    <Row className="content form-margin-top-16 form-margin-bottom-16" noGutters>
      <Col md={{ span:5, offset:1 }}>
        <Catcher title= { formattedText("app.catcher.title") }
                description={ formattedText("app.catcher.description") } />
      </Col>
      <Col md={{ span:4, offset:1 }}>
        <SignIn />
      </Col>
    </Row>
  </div>
);

export default withScrollTop(Login);
