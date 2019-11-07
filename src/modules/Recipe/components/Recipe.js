import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Recipe extends Component {
  render () {
    return (
      <Form onSubmit={ () => {} }>
        <Button variant="success"
                type="submit"
                size="lg"
                disabled={ false }>
          { "Enregistrer >" }
        </Button>
    </Form>
    );
  }
};

export default Recipe;
