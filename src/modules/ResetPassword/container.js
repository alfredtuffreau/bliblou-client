import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { 
  clear,
  setValue, 
  validate, 
  toggleHover, 
  togglePasswordVisibility, 
  startReset,
  validateSignUp, 
  validateReset, 
  cancel 
} from "./actions";
import ResetPassword from "./components/ResetPassword";

const mapStateToProps = state => {
  const { 
    needConfirmSignUp, isSent, isLoading, mail, signUpCode, confirmationCode, password 
  } = state.resetPassword;
  return ({ needConfirmSignUp, isSent, isLoading, mail, signUpCode, confirmationCode, password });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    init: clear,
    setValue, 
    validate, 
    toggleHover,
    togglePasswordVisibility, 
    startReset, 
    validateSignUp, 
    validateReset, 
    cancel
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);