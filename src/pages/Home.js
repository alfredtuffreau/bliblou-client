import React from "react";
import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import BuildingContent from "../components/presentation/BuildingContent";
import SignUp from "../modules/SignUp";

import "./Home.css";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return (
    <div className="Home">
      <BuildingContent />
    </div>
  );

  return (
    <Row className="Home" noGutters>
      <Col md={{ span:5, offset:1 }}>
        <Catcher title= { formattedText("app.catcher.title") }
                 description={ formattedText("app.catcher.description") } />
      </Col>
      <Col md={{ span:4, offset:1 }}>
        <SignUp />
      </Col>
    </Row>
  );
};

Home.propTypes = {
  isAuthenticated: bool,
}

Home.defaultProps = {
  isAuthenticated: false,
}

export default Home;
