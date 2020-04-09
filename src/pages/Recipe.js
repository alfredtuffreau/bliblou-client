import React from "react";
import { array } from "prop-types";

import RecipeView from "../modules/RecipeView";
import RecipeEditor from "../modules/RecipeEditor";
import withScrollTop from "../components/view/withScrollTop";


const view = ({ groups, match: { params: { recipeId } }, location: { search } }) => { 
  const query = new URLSearchParams(search);
  const mode = query.get('mode');

  return (
    <div id="recipe">
      { recipeId === "new" || mode === "edit"
          ? <RecipeEditor id={ recipeId !== "new" ? recipeId : undefined } groups={ groups } />
          : <RecipeView id={ recipeId } groups={ groups } /> }
    </div>
  );
};

view.propTypes = {
  groups: array
};

view.defaultProps = {
  groups: undefined
}

export default withScrollTop(view);