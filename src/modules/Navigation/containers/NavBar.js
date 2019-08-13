  import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadUser, logout } from "../actions";
import NavBar from "../components/NavBar";

const mapStateToProps = state => {
  const { isAuthenticated } = state.navigation;
  return ({ isAuthenticated });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadUser, logout }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);