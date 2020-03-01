import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Recipes from "./components/Recipes";
import { loadRecipes } from "./actions";

const mapStateToProps = state => {
  const { catalog } = state.recipes;
  return ({ catalog });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onLoad: loadRecipes }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);