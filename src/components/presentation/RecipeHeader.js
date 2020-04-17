import React from "react";
import { array, string, object, func } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import defaultImage from "../../images/building.png";
import ImagePanel from "../view/ImagePanel";
import RecipeInformations from "./RecipeInformations";

import ActionButtons from "./ActionButtons";

const RecipeHeader = ({ groups, content, src, handleOnDelete, handleOnEdit }) => {
  const { 
    title, 
    description, 
    durations: { 
      before = {},
      preparation, 
      cookingAfterPreparation,
      resting
    } = {},
    nbOfPeople 
  } = content;

  return (
    <ImagePanel src={ src || defaultImage } 
                className={ `no-padding deep${src ? "" : " default-image"}` }>
      <Container>
        <Row>
          <Col lg={{ span: 6 }}>
            <h1>{ title }</h1>
            <p className="text-align-justify">{ description }</p>
            <RecipeInformations nbOfPeople={ nbOfPeople }
                                before={ before }
                                preparation={ preparation }
                                cookingAfterPreparation={ cookingAfterPreparation }
                                resting={ resting } />
            <ActionButtons groups={ groups }
                           onDelete={ handleOnDelete }
                           onEdit={ handleOnEdit } />
          </Col>
          <Col lg={{ span: 6 }}>
            <div className={ `image-container recipe-picture${ src ? "" : " default-image" }` } 
                style={{ backgroundImage: `url(${src || defaultImage})` }} />
          </Col>
        </Row>
      </Container>
    </ImagePanel>
  );
};

RecipeHeader.propTypes = {
  groups: array,
  content: object,
  src: string,
  handleOnDelete: func,
  handleOnEdit: func
};

RecipeHeader.defaultProps = {
  groups: undefined,
  content: {},
  src: undefined,
  handleOnDelete: () => {},
  handleOnEdit: () => {}
};

export default RecipeHeader;