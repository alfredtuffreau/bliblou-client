import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignUp from "./components/SignUp";
import { 
  setValidValue, setValue, validate, toggleHover , togglePasswordVisibility, signUp, confirm, clear
} from "./actions";

const mapStateToProps = state => {
  const { firstname, lastname, mail, password, gender, confirmationCode, newUser, isLoading } = state.signUp;
  return ({ firstname, lastname, mail, password, gender, confirmationCode, newUser, isLoading });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setValidValue, setValue, validate, toggleHover, togglePasswordVisibility, signUp, confirm, clear
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);