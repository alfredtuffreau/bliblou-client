import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeEditor from "./components/RecipeEditor";
import { loadRecipe, setPicture, setValue, validate, toggleHover, save, back, clear } from "./actions";

const mapStateToProps = state => {
  const { content, picture, currentPicture, isLoading } = state.recipeEditor;
  return ({ 
    content: { ...content, showTooltip: content.isHover && content.isValid === false },
    picture,
    currentPicture,
    isLoading
  });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    onLoad: loadRecipe,
    onFilesAdded: setPicture, 
    onChange: setValue, 
    onBlur: validate, 
    onHover: toggleHover, 
    onSubmit: save,
    onCancel: back,
    clear
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);