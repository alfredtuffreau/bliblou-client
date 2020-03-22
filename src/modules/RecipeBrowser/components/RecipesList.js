import React from "react";
import { bool, string, array, func } from "prop-types";

import CardList from "../../../components/presentation/CardList";

import "./RecipesList.css";

import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

const CARDS_HEIGHT = 10;
const CARDS_WIDTH = 18;
const CARDS_THEME = "bg-dark text-white";

const RecipesList = ({ isEditor, title, predicate, catalog, onClick }) => {
  const recipeToCard = ({ recipeId, content, src }, index) => ( 
    <RecipeCard key={ `${recipeId}${index}` }
                recipeId={ recipeId } 
                content={ content } 
                src={ src } 
                width={ CARDS_WIDTH } 
                height={ CARDS_HEIGHT } 
                className={ CARDS_THEME } 
                onClick={ onClick } />
  );
  return (
    <div className="recipes-list">
      <CardList title={ title }>
        <AddRecipeCard isEditor={ isEditor }
                       className={ CARDS_THEME } 
                       height={ CARDS_HEIGHT } 
                       width={ CARDS_HEIGHT } 
                       onClick={ onClick } />
        { catalog.filter(predicate).map(recipeToCard) }
      </CardList>
    </div>
  );
}; 

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