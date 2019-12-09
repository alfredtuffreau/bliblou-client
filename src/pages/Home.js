import React from "react";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import withScrollTop from "../components/view/withScrollTop";
import SignUp from "../modules/SignUp";

const Home = () => (
  <div className="dark-panel">
    <Row className="content form-medium-margin-top form-medium-margin-bottom" noGutters>
      <Col md={{ span:5, offset:1 }}>
        <Catcher title= { formattedText("app.catcher.title") }
                description={ formattedText("app.catcher.description") } />
      </Col>
      <Col md={{ span:4, offset:1 }}>
        <SignUp />
      </Col>
    </Row>
  </div>
);

export default withScrollTop(Home);
