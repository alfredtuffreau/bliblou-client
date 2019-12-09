import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadUser, logout, setWithBackground } from "./actions";
import Routes from "./components/Routes";

const mapStateToProps = state => {
  const { isAuthenticated, withBackground } = state.navigation;
  return ({ isAuthenticated, withBackground });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadUser, logout, setWithBackground }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
