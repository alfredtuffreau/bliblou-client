import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Recipe from "./components/Recipe";
import { setPicture, save } from "./actions";

const mapStateToProps = state => {
  const { content, picture } = state.recipe;
  return ({ content, picture });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setPicture, save
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);