import React from "react";
import { number, shape } from "prop-types";
import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaUsers } from 'react-icons/fa';

import Durations from "./Durations";

const RecipeInformations = ({ nbOfPeople, before, preparation, cookingAfterPreparation, resting }) => (
  <div className="recipe-info">
    { 
      !nbOfPeople
        ? <></>
        : <Container>
            <Row>
              <div className="info">
                <IconContext.Provider value={{ className: "green icon icon-sm" }}>
                  <FaUsers />{ ` ${nbOfPeople } pers.` }
                </IconContext.Provider>
              </div>
            </Row>
          </Container>
    }
    <Durations description="Réalisations à anticiper" { ...before } />
    <Durations description="Avant de déguster"
               preparation={ preparation } 
               cookingAfterPreparation={ cookingAfterPreparation} 
               resting={ resting } />
  </div>
);

RecipeInformations.propTypes = {
  nbOfPeople: number,
  before: shape({ preparation: number, cookingAfterPreparation: number, resting: number }),
  preparation: number,
  cookingAfterPreparation: number,
  resting: number
};

RecipeInformations.defaultProps = {
  nbOfPeople: 0,
  before: {},
  preparation: 0,
  cookingAfterPreparation: 0,
  resting: 0
};

export default RecipeInformations;