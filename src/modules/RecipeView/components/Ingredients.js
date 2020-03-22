import React from "react";
import { array } from "prop-types";

const Ingredients = ({ ingredients }) => {
  return !ingredients || ingredients.length === 0 
    ? <></>
    : (
      <>
        <h2>Ingrédients</h2>
        { ingredients.map((ingredient, index) => (
          <p key={ `ingredient-${index}` }>
            { ingredient }
          </p>
        )) }
      </>
    );
};

Ingredients.propTypes = {
  ingredients: array
};

Ingredients.defaultProps = {
  ingredients: undefined
};

export default Ingredients;