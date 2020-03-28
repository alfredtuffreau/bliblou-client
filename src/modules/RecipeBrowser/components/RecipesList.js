import React from "react";
import { bool, string, array, func } from "prop-types";

import CardList from "../../../components/presentation/CardList";

import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

const RecipesList = ({ isEditor, title, predicate, catalog, onClick }) => (
  <CardList title={ title } className="recipes-list">
    <AddRecipeCard isEditor={ isEditor }
                   onClick={ onClick } />
    { catalog.filter(predicate)
              .map(({ recipeId, content, src }, index) => ( 
      <RecipeCard key={ `${recipeId}${index}` }
                  recipeId={ recipeId } 
                  content={ content } 
                  src={ src } 
                  onClick={ onClick } />
    )) }
  </CardList>
); 

RecipesList.propTypes = {
  isEditor: bool,
  title: string.isRequired,
  catalog: array,
  predicate: func,
  onClick: func.isRequired,
};

RecipesList.defaultProps = {
  isEditor: undefined,
  catalog: [],
  predicate: () => true,
};

export default RecipesList;