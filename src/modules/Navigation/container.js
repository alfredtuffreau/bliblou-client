import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadUser, logout, setFooterHeight } from "./actions";
import Routes from "./components/Routes";

const mapStateToProps = state => {
  const { isAuthenticated, isEditor, footerHeight } = state.navigation;
  return ({ isAuthenticated, isEditor, footerHeight });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadUser, logout, setFooterHeight }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
