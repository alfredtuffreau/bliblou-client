import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import ImagePanel from "../components/view/ImagePanel";
import Catcher from "../components/presentation/Catcher";
import withScrollTop from "../components/view/withScrollTop";
import SignUp from "../modules/SignUp";

const Home = ({ footerHeight }) => (
  <ImagePanel src={ img } navbarHeight={ 70 } footerHeight={ footerHeight } fullScreen>
    <Container>
      <Row>
        <Col lg={{ span:5, offset:1 }}>
          <Catcher />
        </Col>
        <Col lg={{ span:4, offset:1 }}>
          <SignUp />
        </Col>
      </Row>
    </Container>
  </ImagePanel>
);

export default withScrollTop(Home);
