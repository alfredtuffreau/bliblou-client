import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import RecipeView from "../modules/RecipeView";
import RecipeEditor from "../modules/RecipeEditor";
import withScrollTop from "../components/view/withScrollTop";


const view = ({ isEditor, match: { params: { recipeId } }, location: { search } }) => { 
  const query = new URLSearchParams(search);
  const mode = query.get('mode');

  return (
    <Container className="panel">
      <Row>
        <Col>
          { recipeId === "new" || mode === "edit"
              ? <RecipeEditor id={ recipeId !== "new" ? recipeId : undefined } isEditor={ isEditor } />
              : <RecipeView id={ recipeId } isEditor={ isEditor } /> }
        </Col>
      </Row>
    </Container>
  );
}  

export default withScrollTop(view);