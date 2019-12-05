import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

import Dropzone from "../../../components/utils/Dropzone";
import withBackgroundImage from "../../../components/view/withBackgroundImage";

import "./Recipe.css";

const DropzoneWithBackgroundImage = withBackgroundImage(Dropzone);
const RECIPE_TEMPLATE = `{
  "title": "",
  "description": "",
  "durations": {
    "preparation": 0,
    "cookingAfterPreparation": 0,
    "resting": {
      "before": 0,
      "after": 0
    }
  },
  "nbOfPeople": 0,
  "steps": [],
  "suggestions": []
}`;

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onFilesAdded = this.onFilesAdded.bind(this);
  }

  onFilesAdded(files) {
    this.setState({ file: files[0] });
  }

  render = () => (
    <Row className="recipe">
      <Col md={{ span:5 }}>
        { this.state.file
          ? <DropzoneWithBackgroundImage label="Changer de fichier" 
                                          onFilesAdded={ this.onFilesAdded }
                                          file={ this.state.file } />
          : <Dropzone label="Déposer un fichier" 
                      onFilesAdded={ this.onFilesAdded } /> }
      </Col>
      <Col md={{ span:7 }}>  
        <Form onSubmit={ () => {} }>
          <Form.Group controlId="recipeContent">
            <Form.Label hidden>Recipe content</Form.Label>
            <Form.Control as="textarea" 
                          value={ RECIPE_TEMPLATE } 
                          rows={ RECIPE_TEMPLATE.split(/\r\n|\r|\n/).length } />
          </Form.Group>
          <Button variant="success"
                  type="submit"
                  size="lg"
                  disabled={ false }>
            { "Enregistrer >" }
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Recipe;
