import React, { Component } from "react";
import { bool } from "prop-types"
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

import { RECIPE } from "../../../modules/Navigation";

class AddRecipeCard extends Component {
  render() {
    const { isEditor } = this.props;
    return !isEditor
      ? <></>
      : (
        <Card as={ NavLink }
              to={ RECIPE.replace(":recipeId", "new") } 
              key="new-recipe"
              className="add"
              bg="light"
              text="dark">
          <div className="card-img">
            <IconContext.Provider value={{ className: "icon" }}>
              <FaPlus />
            </IconContext.Provider>
          </div>
          <Card.Body>
            <Card.Title key="new-recipe">Nouvelle recette</Card.Title>
          </Card.Body>
        </Card>
      );
  }
};

AddRecipeCard.propTypes = {
  isEditor: bool
}

AddRecipeCard.defaultProps = {
  isEditor: undefined
}

export default AddRecipeCard;
