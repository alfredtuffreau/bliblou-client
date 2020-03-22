import React from "react";
import { Row, Col } from "react-bootstrap";

import RecipeView from "../modules/RecipeView";
import RecipeEditor from "../modules/RecipeEditor";
import withScrollTop from "../components/view/withScrollTop";


const view = ({ isEditor, match: { params: { recipeId } }, location: { search } }) => { 
  const query = new URLSearchParams(search);
  const mode = query.get('mode');

  return recipeId === "new" || mode === "edit"
    ? (
      <Row className="content form-margin-bottom-16" noGutters>
        <Col md={{ span: 10, offset: 1 }}>
          <RecipeEditor id={ recipeId !== "new" ? recipeId : undefined } 
                        isEditor={ isEditor } />
        </Col>
      </Row>
    )
    : <RecipeView id={ recipeId } 
                  isEditor={ isEditor } />;
};

export default withScrollTop(view);