import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default () => {
  const label = "Date de naissance ( JJ-MM-AAAA )";
  return (
    <Form.Group controlId="birthdate">
      <Form.Label hidden>{ label }</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder={ label }
          aria-describedby="calendar"
          required
        />
        <InputGroup.Append>
          <InputGroup.Text id="calendar">Sélectionner date</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
};
