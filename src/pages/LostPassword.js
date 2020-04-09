import React from "react";
import { number } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import ImagePanel from "../components/view/ImagePanel";
import withScrollTop from "../components/view/withScrollTop";
import ResetPassword from "../modules/ResetPassword";

const LostPassword = ({ navbarHeight, footerHeight }) => (
  <div id="lost-password">
    <ImagePanel src={ img } minHeight={ `calc(100vh - ${navbarHeight}px - ${footerHeight}px)` }>
      <Container>
        <Row>
          <Col md={{ span:8, offset:2 }}>
            <ResetPassword />
          </Col>
        </Row>
      </Container>
    </ImagePanel>
  </div>
);

LostPassword.propTypes= {
  navbarHeight: number,
  footerHeight: number
};

LostPassword.defaultProps= {
  navbarHeight: 0,
  footerHeight: 0
};

export default withScrollTop(LostPassword);
