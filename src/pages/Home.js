import React from "react";
import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";

import icon from "../images/building.png";
import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import SignUp from "../modules/SignUp";

import "./Home.css";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return (
    <div className="Home">
      <div className="Building">
        <h2>{ formattedText("app.building.title") }</h2>
        <h3>{ formattedText("app.building.description") }</h3>
        <img src={ icon } alt="Building" className="Icon" />
      </div>
    </div>
  );

  return (
    <Row className="Home">
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
