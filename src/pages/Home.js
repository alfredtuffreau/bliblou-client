import React from "react";
import { bool } from "prop-types";
import { Row, Col } from "react-bootstrap";

import { formattedText } from "../translations";
import Catcher from "../components/presentation/Catcher";
import BuildingContent from "../components/presentation/BuildingContent";
import SignUp from "../modules/SignUp";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) return (
    <div className="dark-panel">
      <div className="content centered-content">
        <BuildingContent />
      </div>
    </div>
  );

  return (
    <div>
      <div className="dark-panel">
        <Row className="content with-tiny-form-margin-top" noGutters>
          <Col md={{ span:5, offset:1 }}>
            <Catcher title= { formattedText("app.catcher.title") }
                    description={ formattedText("app.catcher.description") } />
          </Col>
          <Col md={{ span:4, offset:1 }}>
            <SignUp />
          </Col>
        </Row>
      </div>
      <div style={{ height: "200px", backgroundColor: "black" }}></div>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: bool,
}

Home.defaultProps = {
  isAuthenticated: false,
}

export default Home;
