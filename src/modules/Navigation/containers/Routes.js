import { connect } from "react-redux";

import Routes from "../components/Routes";

const mapStateToProps = state => {
  const { isAuthenticated } = state.navigation;
  return ({ isAuthenticated });
};

export default connect(mapStateToProps, null)(Routes);