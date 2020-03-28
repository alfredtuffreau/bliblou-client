import React, { useEffect } from "react";
import { string, object, func } from "prop-types";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import PictureContainer from "./PictureContainer";
import InfoTable from "./InfoTable";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import ActionButtons from "./ActionButtons";
import Suggestions from "./Suggestions";

const RecipeView = ({ 
  id, content, picture, src, isLoading, isEditor, onLoad, onDelete, onEdit, clear, history 
}) => {
  useEffect(() => { 
    onLoad(id, history);
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
      onDelete(id, picture, history);
  };

  const handleOnEdit = () => {
    onEdit(id, history);
  };

  return isLoading
    ? <></>
    : ( <>
          <div className="recipe-header">
            <PictureContainer src={ src } />
              <h1>{ title }</h1>
              <p>{ description }</p>
              <InfoTable preparation={ preparation }
                        cookingAfterPreparation={ cookingAfterPreparation }
                        before={ before }
                        after={ after }
                        nbOfPeople={ nbOfPeople } />
              <ActionButtons isEditor={ isEditor }
                              onDelete={ handleOnDelete }
                              onEdit={ handleOnEdit } />
          </div> 
          <Row className="recipe-body">
            <Col md={{ span: 3, offset: 1 }}>
              <Ingredients ingredients={ ingredients } />
            </Col>
            <Col md={{ span: 7 }}>
              <Steps steps={ steps } />
            </Col>
          </Row>
          <Row className="recipe-footer">
            <Col md={{ span: 11, offset: 1 }}>
              <Suggestions suggestions={ suggestions } />
            </Col>
          </Row>
        </> );
};

RecipeView.propTypes = {
  id: string.isRequired,
  content: object,
  picture: string,
  src: string,
  onLoad: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  clear: func.isRequired
};

RecipeView.defaultProps = {
  content: {},
  picture: undefined,
  src: undefined,
};

export default withRouter(RecipeView);
