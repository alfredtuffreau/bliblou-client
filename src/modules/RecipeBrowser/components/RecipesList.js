import React from "react";
import { bool, string, array, func } from "prop-types";

import CardList from "../../../components/presentation/CardList";

import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

const RecipesList = ({ title, canAdd, predicate, catalog }) => {
  const recipes = catalog.filter(predicate);
  return recipes.length === 0 && !canAdd 
    ? <></>
    : (
      <CardList title={ title }>
        { canAdd ? <AddRecipeCard /> : <></> }
        { recipes.map(({ recipeId, content, src }, index) => ( 
          <RecipeCard key={ `${recipeId}${index}` }
                      recipeId={ recipeId } 
                      content={ content } 
                      src={ src } />
        )) }
      </CardList>
    ); 
};

RecipesList.propTypes = {
  title: string.isRequired,
  canAdd: bool,
  catalog: array,
  predicate: func
};

RecipesList.defaultProps = {
  canAdd: false,
  catalog: [],
  predicate: () => true
};

export default RecipesList;