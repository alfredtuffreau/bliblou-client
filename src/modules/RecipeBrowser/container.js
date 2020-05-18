import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipesList from "./components/RecipesList";
import { loadPicture } from "./actions";

const mapStateToProps = state => {
  const { catalog } = state.recipeBrowser;
  return ({ catalog });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadPicture }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);