import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

import { RECIPE } from "../../../modules/Navigation";

const AddRecipeCard= () => (
  <Card key="new-recipe"
        className="add"
        bg="light">
    <NavLink to={ RECIPE.replace(":recipeId", "new") }
         className="card-img">
      <IconContext.Provider value={{ className: "icon icon-lg" }}>
        <FaPlus />
      </IconContext.Provider>
    </NavLink>
    <Card.Body>
      <Card.Title as={ NavLink }
                  to={ RECIPE.replace(":recipeId", "new") }
                  key="new-recipe">
        Nouvelle recette
      </Card.Title>
    </Card.Body>
  </Card>
);

export default AddRecipeCard;
