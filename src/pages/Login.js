import React from "react";
import { bool } from "prop-types";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import SignIn from "../modules/SignIn";
import { HOME } from "../modules/Navigation";

import "./Login.css";

const Login = ({ isAuthenticated, history }) => {
  if (isAuthenticated) history.push(HOME);

  return (
    <Row className="Login">
      <Col md={{ span:5, offset:1 }}>
        <Catcher title= { formattedText("app.catcher.title") }
                 description={ formattedText("app.catcher.description") } />
      </Col>
      <Col md={{ span:4, offset:1 }}>
        <SignIn />
      </Col>
    </Row>
  );
};

Login.propTypes = {
  isAuthenticated: bool,
};

Login.defaultProps = {
  isAuthenticated: false,
};

export default withRouter(Login);
