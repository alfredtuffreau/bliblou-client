import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeView from "./components/RecipeView";
import { loadRecipe, removeRecipe, goToEdit, clear } from "../RecipeView/actions";

const mapStateToProps = state => {
  const { content, picture, src, isLoading } = state.recipeView;
  return ({ content, picture, src, isLoading });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onLoad: loadRecipe, onDelete: removeRecipe, onEdit: goToEdit, clear }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);