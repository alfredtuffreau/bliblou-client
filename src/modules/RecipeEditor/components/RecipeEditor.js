import React, { Component } from "react";
import { object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { RECIPE } from "../../../modules/Navigation";
import Dropzone from "../../../components/utils/Dropzone";

import RecipeForm from "./RecipeForm";

class RecipeEditor extends Component {
  constructor(props) {
    super(props);
    this.handleOnFilesAdded = this.handleOnFilesAdded.bind(this);
  }

  componentWillMount = () => {
    const { id, loadRecipe, history } = this.props;
    if (id) loadRecipe(id, history);
  }

  componentWillUnmount = () => {
    const { picture, clear } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    clear();
  }

  handleOnFilesAdded(files) {
    const { picture, setPicture } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    
    const { name, type, lastModified } = files[0];
    const url = URL.createObjectURL(files[0])
    setPicture(url, name, type, lastModified);
  }

  render = () => {
    const { 
      id, picture, currentPicture, content, isLoading, isEditor, setValue, validate, toggleHover, save, back, history 
    } = this.props;

    if (isEditor === false) history.push(RECIPE.replace(":recipeId", id));

    return !isEditor
      ? <></>
      : (
        <Container className="panel">
          <Row>
            <Col md={{ span:5 }}>
              <Dropzone label={ `${picture ? "Changer de" : "Déposer un"} fichier` }
                        onFilesAdded={ this.handleOnFilesAdded }
                        src={ picture ? picture.url : undefined } />
            </Col>
            <Col md={{ span:7 }}> 
              <RecipeForm id={ id }
                          picture={ picture } 
                          currentPicture={ currentPicture } 
                          content={ content } 
                          isLoading={ isLoading } 
                          onFieldChange={ setValue } 
                          onFieldBlur={ validate } 
                          onFieldHover={ toggleHover } 
                          onSubmit={ save }
                          onCancel={ back } />
            </Col>
          </Row>
        </Container>
      );
  }
};

RecipeEditor.propTypes = {
  isEditor: bool,
  id: string,
  picture: object,
  currentPicture: string,
  content: shape({ id: string, value: string, isValid: bool }).isRequired,
  loadRecipe: func.isRequired,
  setPicture: func.isRequired,
	isLoading: bool,
  setValue: func.isRequired,
  validate: func.isRequired,
	toggleHover: func.isRequired,
  save: func.isRequired,
  back: func.isRequired,
};

RecipeEditor.defaultProps = {
  isEditor: undefined,
  id: undefined,
  picture: undefined,
  currentPicture: undefined,
  isLoading : false,
};

export default withRouter(RecipeEditor);
