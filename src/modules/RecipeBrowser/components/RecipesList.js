import React from "react";
import { bool, string, array, number, shape, func } from "prop-types";

import CardList from "../../../components/presentation/CardList";
import RecipeHeader from "../../../components/presentation/RecipeHeader";

import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

const RecipesList = ({ index, title, canAdd, catalog, info, predicate, onInfoClick }) => {
  const recipes = catalog.filter(predicate);
  const handleOnInfoClick = (cardIndex) => {
    onInfoClick(index, cardIndex);
  };

  console.log(info, index)
  return recipes.length !== 0 || canAdd 
    ? (
      <div className="recipes-list">
        <CardList title={ title }>
          { canAdd ? <AddRecipeCard /> : <></> }
          { recipes.map(({ recipeId, content, src }, index) => ( 
            <RecipeCard key={ `${recipeId}${index}` }
                        index={ index }
                        recipeId={ recipeId } 
                        content={ content } 
                        src={ src }
                        onInfoClick={ handleOnInfoClick } />
          )) }
        </CardList>
        { info && info.listIndex === index
            ? <RecipeHeader content={ recipes[info.cardIndex].content } 
                            src={ recipes[info.cardIndex].src } />
            : <></> }
      </div>
    )
    : <></>; 
};

RecipesList.propTypes = {
  index: number.isRequired,
  title: string.isRequired,
  canAdd: bool,
  catalog: array,
  info: shape({ listIndex: number, cardIndex: number }),
  predicate: func
};

RecipesList.defaultProps = {
  canAdd: false,
  catalog: [],
  infoIndexes: undefined,
  predicate: () => true
};

export default RecipesList;