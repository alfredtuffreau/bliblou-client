import React, { Component } from "react";
import { array, object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { RECIPE } from "../../../modules/Navigation";
import Dropzone from "../../../components/utils/Dropzone";

import RecipeForm from "./RecipeForm";

class RecipeEditor extends Component {
  constructor (props) {
    super(props);
    this.handleOnFilesAdded = this.handleOnFilesAdded.bind(this);
  }

  componentWillMount = () => {
    const { id, loadRecipe, history } = this.props;
    if (id) loadRecipe(id, history);
  };

  componentWillUnmount = () => {
    const { picture, clear } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    clear();
  };

  handleOnFilesAdded(files) {
    if (files.length === 0) return;
    
    const { picture, setPicture } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    
    const { name, type, lastModified } = files[0];
    const url = URL.createObjectURL(files[0])
    setPicture(url, name, type, lastModified);
  }

  render () {
    const { 
      groups, id, picture, currentPicture, content, isLoading, setValue, validate, save, back, history 
    } = this.props;

    if (!(groups && groups.some(group => [ "chefs", "reviewers", "publishers" ].includes(group)))) 
      history.push(RECIPE.replace(":recipeId", id));

    return (
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
                        validateField={ validate }
                        onSubmit={ save }
                        onCancel={ back } />
          </Col>
        </Row>
      </Container>
    );
  }
};

RecipeEditor.propTypes = {
  groups: array,
  id: string,
  picture: object,
  currentPicture: string,
  content: shape({ id: string, value: string, isValid: bool }).isRequired,
	isLoading: bool,
  loadRecipe: func.isRequired,
  setPicture: func.isRequired,
  setValue: func.isRequired,
  validate: func.isRequired,
  save: func.isRequired,
  back: func.isRequired,
};

RecipeEditor.defaultProps = {
  groups: undefined,
  id: undefined,
  picture: undefined,
  currentPicture: undefined,
  isLoading : false,
};

export default withRouter(RecipeEditor);
