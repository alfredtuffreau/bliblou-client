import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeEditor from "./components/RecipeEditor";
import { setPicture, setValue, validate, toggleHover, save } from "./actions";

const mapStateToProps = state => {
  const { content, picture, isLoading } = state.recipeEditor;
  return ({ 
    content: { ...content, showTooltip: content.isHover && content.isValid === false },
    picture,
    isLoading
  });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    onFilesAdded: setPicture, 
    onChange: setValue, 
    onBlur: validate, 
    onHover: toggleHover, 
    onSubmit: save
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);