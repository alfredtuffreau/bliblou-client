import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";

import { HOME } from "../Routes";

import Catcher from "../components/Catcher";
import { default as SignInForm } from "../modules/SignIn";

class Login extends Component {
  signIn = async (email, password) => {
    const { userHasAuthenticated, history } = this.props;

    await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push(HOME);
  };

  render () {
    return (
      <Row className="Main">
        <Col md={{ span:5, offset:1 }}>
          <Catcher />
        </Col>

        <Col md={{ span:4, offset:1 }}>
          <SignInForm signIn={ this.signIn } />
        </Col>
      </Row>
    );
  }
}

export default Login;
