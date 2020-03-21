import React, { Component } from "react";
import { object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";

import Dropzone from "../../../components/utils/Dropzone";
import withBackgroundImage from "../../../components/view/withBackgroundImage";
import TextareaInput from "../../../components/form/TextareaInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const CONTENT_ALERT_MESSAGE = "Le format JSON est invalide.";
const TextareaInputWithTooltip = withValidationTooltip(TextareaInput, CONTENT_ALERT_MESSAGE);
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

class RecipeEditor extends Component {
  constructor(props) {
    super(props);
    this.handleOnFilesAdded = this.handleOnFilesAdded.bind(this);
  }

  componentWillUnmount = () => {
    const { picture } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
  }

  handleOnFilesAdded(files) {
    const { picture, onFilesAdded } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    
    const { name, type, lastModified } = files[0];
    const url = URL.createObjectURL(files[0])
    onFilesAdded(url, name, type, lastModified);
  }

  validToSubmit = () => {
    const invalidFields = [
      this.props.content
    ].filter(({ isValid }) => isValid === false);
    return invalidFields.length === 0;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { content, picture, onSubmit, history } = this.props;
    const { url, name, type, lastModified } = picture || {};
    onSubmit(
      content.value 
        ? content 
        : { value: RECIPE_TEMPLATE, isValid: true }, 
      picture 
        ? await fetch(url).then(response => response.blob())
                          .then(blobFile => new File([ blobFile ], name, { type, lastModified }))
        : null, 
      history
    );
  };

  render = () => {
    const { picture, content, isLoading, onChange, onBlur, onHover } = this.props;

    return (
      <Row className="recipe-editor">
        <Col md={{ span:5 }}>
          { picture
            ? <DropzoneWithBackgroundImage label="Changer de fichier" 
                                           onFilesAdded={ this.handleOnFilesAdded }
                                           src={ picture.url } />
            : <Dropzone label="Déposer un fichier" 
                        onFilesAdded={ this.handleOnFilesAdded } /> }
        </Col>
        <Col md={{ span:7 }}>  
          <Form onSubmit={ this.handleOnSubmit }>
            <TextareaInputWithTooltip controlId="content" 
                                      label="Recipe content"
                                      content={ content }
                                      defaultValue={ RECIPE_TEMPLATE }
                                      showTooltip={ content.showTooltip }
                                      onChange={ onChange }
                                      onBlur={ onBlur }
                                      onHover={ onHover } />
            <Button variant="success"
                    type="submit"
                    size="lg"
                    disabled={ !this.validToSubmit() || isLoading }>
                    { !isLoading
                        ? "Enregistrer >"
                        : "Enregistrement..." }
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
};

RecipeEditor.propTypes = {
  picture: object,
  content: shape({ value: string, isValid: bool }),
  onFilesAdded: func.isRequired,
	isLoading: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
};

RecipeEditor.defaultProps = {
  picture: undefined,
  content: { value: undefined, isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(RecipeEditor);
