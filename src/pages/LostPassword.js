import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import ImagePanel from "../components/view/ImagePanel";
import withScrollTop from "../components/view/withScrollTop";
import ResetPassword from "../modules/ResetPassword";

const LostPassword = ({ footerHeight }) => (
  <ImagePanel src={ img } navbarHeight={ 70 } footerHeight={ footerHeight } fullScreen>
    <Container className="lost-password">
      <Row>
        <Col md={{ span:8, offset:2 }}>
          <ResetPassword />
        </Col>
      </Row>
    </Container>
  </ImagePanel>
);

export default withScrollTop(LostPassword);
