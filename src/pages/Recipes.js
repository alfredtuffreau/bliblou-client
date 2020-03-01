import React from "react";
import { Row } from "react-bootstrap";

import Recipes from "../modules/Recipes";
import withScrollTop from "../components/view/withScrollTop";

const view = () => (
  <Row className="content">
    <Recipes />
  </Row>
);

export default withScrollTop(view);
