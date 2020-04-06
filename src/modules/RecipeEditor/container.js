import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeEditor from "./components/RecipeEditor";
import { loadRecipe, setPicture, setValue, validate, save, back, clear } from "./actions";

const mapStateToProps = state => {
  const { content, picture, currentPicture, isLoading } = state.recipeEditor;
  return ({ content, picture, currentPicture, isLoading });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadRecipe, setPicture, setValue, validate, save, back, clear }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);