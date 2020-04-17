import React, { useEffect } from "react";
import { array, bool, string, object, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { EDIT_RECIPE } from "../../../modules/Navigation";
import RecipeHeader from "../../../components/presentation/RecipeHeader";

import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Advices from "./Advices";

const RecipeView = ({ 
  groups, id, content, picture, src, isLoading, loadRecipe, removeRecipe, clear, history 
}) => {
  useEffect(() => { 
    loadRecipe(id, history);
    return () => clear(); 
  }, [id]);

  const { ingredients, steps, advices } = content;

  const handleOnDelete = () => {
    if (window.confirm("La recette va être supprimée définitivement. Voulez-vous continuer ?")) 
    removeRecipe(id, picture, history);
  };

  const handleOnEdit = () => {
    return history.push(EDIT_RECIPE.replace(":recipeId", id));
  };

  return isLoading
    ? <></>
    : <div className="recipe-view">
        <RecipeHeader groups={ groups } 
                      content={ content } 
                      src={ src } 
                      handleOnDelete={ handleOnDelete } 
                      handleOnEdit={ handleOnEdit } />
        <div className="panel">
          <Container>
            <Row>
              <Col lg={{ span: 4 }}>
                <Ingredients ingredients={ ingredients } />
              </Col>
              <Col lg={{ span: 8 }}>
                <Steps steps={ steps } />
              </Col>
            </Row>
          </Container>
          <Container className="lists">
            <Row>
              <Col>
                <Advices advices={ advices } />
              </Col>
            </Row>
          </Container> 
        </div>
      </div>;
};

RecipeView.propTypes = {
  groups: array,
  id: string.isRequired,
  content: object,
  picture: string,
  src: string,
	isLoading: bool,
  loadRecipe: func.isRequired,
  removeRecipe: func.isRequired,
  clear: func.isRequired
};

RecipeView.defaultProps = {
  groups: undefined,
  content: {},
  picture: undefined,
  src: undefined,
	isLoading: false,
};

export default withRouter(RecipeView);
