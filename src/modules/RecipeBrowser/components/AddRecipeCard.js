import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

import { RECIPE } from "../../../modules/Navigation";

const AddRecipeCard= () => (
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

export default AddRecipeCard;
