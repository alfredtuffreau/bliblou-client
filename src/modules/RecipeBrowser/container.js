import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecipeBrowser from "./components/RecipeBrowser";
import { loadCatalog, loadPicture, setScrollsLeft } from "./actions";

const mapStateToProps = state => {
  const { catalog, scrollsLeft } = state.recipeBrowser;
  return ({ catalog, scrollsLeft });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadCatalog, loadPicture, setScrollsLeft }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBrowser);