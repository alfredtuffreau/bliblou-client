import React from "react";
import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import withScrollTop from "../components/view/withScrollTop";
import SignIn from "../modules/SignIn";
import { HOME, withNavbarAndBackground, withFooter } from "../modules/Navigation";

const Login = ({ isAuthenticated, history }) => {
  if (isAuthenticated) history.push(HOME);

  return (
    <div className="dark-panel">
      <Row className="content medium-margin-top-on-form" noGutters>
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
};

Login.propTypes = {
  isAuthenticated: bool,
};

Login.defaultProps = {
  isAuthenticated: false,
};

export default [ 
  withScrollTop, 
  withNavbarAndBackground,
  withFooter,
].reduce((acc, op) => op(acc), Login);
