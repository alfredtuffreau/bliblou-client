import React from "react";
import { number } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import ImagePanel from "../components/view/ImagePanel";
import Catcher from "../components/presentation/Catcher";
import withScrollTop from "../components/view/withScrollTop";
import SignIn from "../modules/SignIn";

const Login = ({ navbarHeight, footerHeight }) => (
  <div id="login">
    <ImagePanel src={ img } minHeight={ `calc(100vh - ${navbarHeight}px - ${footerHeight}px)` }>
      <Container>
        <Row>
          <Col lg={{ span:5, offset:1 }}>
            <Catcher />
          </Col>
          <Col lg={{ span:4, offset:1 }}>
            <SignIn />
          </Col>
        </Row>
      </Container>
    </ImagePanel>
  </div>
);

Login.propTypes= {
  navbarHeight: number,
  footerHeight: number
};

Login.defaultProps= {
  navbarHeight: 0,
  footerHeight: 0
};

export default withScrollTop(Login);
