import React, { Component } from "react";
import { object, func } from "prop-types";
import { Row, Col } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";

import Catcher from "../components/Catcher";
import { default as SignUpForm } from "../modules/SignUp";
import { default as ConfirmForm } from "../modules/Confirm";
import { user, setNewUser } from "../modules/User";
import { setMail, setPassword } from "../modules/Confirm";

class Home extends Component {
  signUp = async (firstname, lastname, mail, password, gender) => {
    const { setNewUser, setMail, setPassword } = this.props;
    const attributes = { name: firstname, family_name: lastname, gender };

    const user = await Auth.signUp({ username: mail, password, attributes });

    setMail(mail);
    setPassword(password);
    setNewUser(user);
  };

  confirm = async (mail, password, confirmationCode) => {
    const { userHasAuthenticated, setNewUser } = this.props;

    await Auth.confirmSignUp(mail, confirmationCode);
    await Auth.signIn(mail, password);
    userHasAuthenticated(true);
    setNewUser(undefined);
  };

  render () {
    const { isAuthenticated, newUser } = this.props;
    return (
      <Row className="Main">
        <Col md={{ span:5, offset:1 }}>
          <Catcher />
        </Col>

        { isAuthenticated
          ? <div />
          : newUser
            ? (<Col md={{ span:4, offset:1 }}>
                <ConfirmForm confirm={ this.confirm } />
              </Col>)
            : (<Col md={{ span:4, offset:1 }}>
                <SignUpForm signUp={ this.signUp } />
              </Col>) }
      </Row>
    );
  }
}

Home.propTypes = {
  newUser: object,
  setNewUser: func.isRequired,
  setMail: func.isRequired,
  setPassword: func.isRequired,
}

Home.defaultProps = {
  newUser: undefined,
}

const mapStateToProps = state => {
  const { newUser } = user(state);
  return { newUser };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setNewUser, setMail, setPassword,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
