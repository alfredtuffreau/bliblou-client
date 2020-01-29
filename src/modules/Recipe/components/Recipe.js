import React, { Component } from "react";
import { object, func } from "prop-types"
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

  componentWillUnmount = () => {
    const { picture } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
  }

  onFilesAdded(files) {
    const { picture, setPicture } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    
    const { name, type, lastModified } = files[0];
    const url = URL.createObjectURL(files[0])
    setPicture(url, name, type, lastModified);
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const { picture, save } = this.props;
    
    let file;
    if (picture) {
      const { url, name, type, lastModified } = picture;

      file = await fetch(url).then(response => response.blob())
                             .then(blobFile => new File([ blobFile ], name, { type, lastModified }));
      
      save(file);
    }
  };

  render = () => {
    const { picture } = this.props;

    return (
      <Row className="recipe">
        <Col md={{ span:5 }}>
          { picture
            ? <DropzoneWithBackgroundImage label="Changer de fichier" 
                                           onFilesAdded={ this.onFilesAdded }
                                           src={ picture.url } />
            : <Dropzone label="Déposer un fichier" 
                        onFilesAdded={ this.onFilesAdded } /> }
        </Col>
        <Col md={{ span:7 }}>  
          <Form onSubmit={ this.handleOnSubmit }>
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
  }
};

Recipe.propTypes = {
  picture: object,
  setPicture: func.isRequired,
  save: func.isRequired,
};

Recipe.defaultProps = {
  picture: undefined,
};

export default Recipe;
