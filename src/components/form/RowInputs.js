import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";

class RowInputs extends Component {
  render () {
    return (
      <Form.Row>
        { this.props.children.map((child, index) => <Col key={ index }>{ child }</Col>) }
      </Form.Row>
    );
  }
}

export default RowInputs;
