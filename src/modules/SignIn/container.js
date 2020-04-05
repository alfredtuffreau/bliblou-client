import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignIn from "./components/SignIn";
import { setValue, togglePasswordVisibility, signIn } from "./actions";

const mapStateToProps = state => {
  const { mail, password, isLoading } = state.signIn;
  return ({ mail, password, isLoading });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setValue, togglePasswordVisibility, signIn
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);