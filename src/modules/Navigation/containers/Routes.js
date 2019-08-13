import { connect } from "react-redux";

import NavBar from "../components/Routes";

const mapStateToProps = state => {
  const { isAuthenticated } = state.navigation;
  return ({ isAuthenticated });
};

export default connect(mapStateToProps, null)(NavBar);