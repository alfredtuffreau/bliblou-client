import { connect } from "react-redux";

import RecipesList from "./components/RecipesList";

const mapStateToProps = state => {
  const { catalog } = state.recipeBrowser;
  return ({ catalog });
}

export default connect(mapStateToProps)(RecipesList);