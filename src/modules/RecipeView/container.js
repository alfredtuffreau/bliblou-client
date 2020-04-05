import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeView from "./components/RecipeView";
import { loadRecipe, removeRecipe, clear } from "../RecipeView/actions";

const mapStateToProps = state => {
  const { content, picture, src, isLoading } = state.recipeView;
  return ({ content, picture, src, isLoading });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadRecipe, removeRecipe, clear }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);