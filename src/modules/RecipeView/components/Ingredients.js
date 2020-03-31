import React from "react";
import { array } from "prop-types";

const Ingredients = ({ ingredients }) => {
  return !ingredients || ingredients.length === 0 
    ? <></>
    : (
      <>
        <h2>Ingrédients</h2>
        <ul>
          { ingredients.map((ingredient, index) => (
            <li key={ index }>{ ingredient }</li>
          )) }
        </ul>
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