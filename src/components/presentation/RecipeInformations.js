import React from "react";
import { number } from "prop-types";
import { ListGroup } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaRegClock, FaUsers } from 'react-icons/fa';

const RecipeInformations = ({ before, preparation, cookingAfterPreparation, after, nbOfPeople }) => (
  <ListGroup className="list-group-horizontal">
    <ListGroup.Item>
      <IconContext.Provider value={{ className: "green icon icon-sm" }}>
        <FaRegClock />
        { ` ${before + preparation + cookingAfterPreparation + after } minutes` }
      </IconContext.Provider>
    </ListGroup.Item>
    <ListGroup.Item>
      <IconContext.Provider value={{ className: "green icon icon-sm" }}>
        <FaUsers />
        { ` ${nbOfPeople } pers.` }
      </IconContext.Provider>
    </ListGroup.Item>
  </ListGroup>
);

RecipeInformations.propTypes = {
  before: number,
  preparation: number,
  cookingAfterPreparation: number,
  after: number,
  nbOfPeople: number
};

RecipeInformations.defaultProps = {
  before: 0,
  preparation: 0,
  cookingAfterPreparation: 0,
  after: 0,
  nbOfPeople: 0
};

export default RecipeInformations;