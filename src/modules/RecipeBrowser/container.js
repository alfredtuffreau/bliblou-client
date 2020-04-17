import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipesList from "./components/RecipesList";
import { onInfoClick } from "./actions";

const mapStateToProps = state => {
  const { catalog, info } = state.recipeBrowser;
  return ({ catalog, info });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ onInfoClick }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);