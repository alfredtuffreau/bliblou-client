import React, { Component } from "react";
import { func } from "prop-types";
import { Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { HOME } from "../Routes";
import Catcher from "../components/Catcher";
import { default as SignInForm } from "../modules/SignIn";
import { setMail, setPassword } from "../modules/Confirm";
import { setNewUser } from "../modules/User";

import "./Login.css";

class Login extends Component {
  signIn = async (email, password) => {
    const { 
      userHasAuthenticated, setNewUser, setMail, setPassword, history
    } = this.props;

    try { 
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        await Auth.resendSignUp(email);
      } else {
        throw err;
      }
      
      setMail(email);
      setPassword(password);
      setNewUser({ email, password });
    }
    
    history.push(HOME);
  };

  render () {
    return (
      <Row className="Login">
        <Col md={{ span:5, offset:1 }}>
          <Catcher />
        </Col>

        <Col md={{ span:4, offset:1 }} className="Form">
            <SignInForm signIn={ this.signIn } />
        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  setNewUser: func.isRequired,
  setMail: func.isRequired,
  setPassword: func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setNewUser, setMail, setPassword,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Login);
