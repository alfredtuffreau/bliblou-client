import React, { useEffect } from "react";
import { string, object, func } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import defaultImage from "../../../images/building.png"
import { EDIT_RECIPE } from "../../../modules/Navigation";
import ImagePanel from "../../../components/view/ImagePanel";
import RecipeInformations from "../../../components/presentation/RecipeInformations";

import Ingredients from "./Ingredients";
import Steps from "./Steps";
import ActionButtons from "./ActionButtons";
import Suggestions from "./Suggestions";

const RecipeView = ({ 
  id, content, picture, src, isLoading, isEditor, loadRecipe, removeRecipe, clear, history 
}) => {
  useEffect(() => { 
    loadRecipe(id, history);
    return () => clear(); 
  }, [id]);

  const { 
    title, 
    description, 
    durations: { 
      preparation, 
      cookingAfterPreparation, 
      resting: { before, after } = {}
    } = {},
    nbOfPeople,
    ingredients,
    steps,
    suggestions
  } = content;

  const handleOnDelete = () => {
    if (window.confirm("La recette va être supprimée définitivement. Voulez-vous continuer ?")) 
    removeRecipe(id, picture, history);
  };

  const handleOnEdit = () => {
    return EDIT_RECIPE.replace(":recipeId", id);
  };

  return isLoading
    ? <></>
    : ( <>
          <ImagePanel src={ src || defaultImage } 
                      panelClassName={ src ? undefined : "default-image" }
                      contentClassName="no-margin deep">
            <Container>
              <Row>
                <Col lg={{ span: 6 }}>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                    <RecipeInformations preparation={ preparation }
                                        cookingAfterPreparation={ cookingAfterPreparation }
                                        before={ before }
                                        after={ after }
                                        nbOfPeople={ nbOfPeople } />
                    <ActionButtons isEditor={ isEditor }
                                   onDelete={ handleOnDelete }
                                   onEdit={ handleOnEdit } />
                </Col>
                <Col lg={{ span: 6 }}>
                  <div className={ `recipe-picture${ src ? "" : " default-image" }` } 
                       style={{ backgroundImage: `url(${src || defaultImage})` }} />
                </Col>
              </Row>
            </Container>
          </ImagePanel>
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
                  <Suggestions suggestions={ suggestions } />
                </Col>
              </Row>
            </Container> 
          </div>
        </> );
};

RecipeView.propTypes = {
  id: string.isRequired,
  content: object,
  picture: string,
  src: string,
  loadRecipe: func.isRequired,
  removeRecipe: func.isRequired,
  clear: func.isRequired
};

RecipeView.defaultProps = {
  content: {},
  picture: undefined,
  src: undefined,
};

export default withRouter(RecipeView);
