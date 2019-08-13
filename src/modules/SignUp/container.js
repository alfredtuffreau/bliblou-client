import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignUp from "./components/SignUp";
import { 
  setValidValue, setValue, validate, toggleHover , togglePasswordVisibility, signUp, confirm
} from "./actions";

const mapStateToProps = state => {
  const { 
    firstname, lastname, mail, password, gender, confirmationCode, newUser, isLoading 
  } = state.signUp;

  return ({ 
    signUpForm: {
      firstname: { ...firstname, showTooltip: firstname.isHover && firstname.isValid === false }, 
      lastname: { ...lastname, showTooltip: lastname.isHover && lastname.isValid === false },
      mail: { ...mail, showTooltip: mail.isHover && mail.isValid === false },
      password: { ...password, showTooltip: password.isHover && password.isValid === false },
      gender: { ...gender, showTooltip: gender.isHover && gender.isValid === false },
    },
    confirmForm: { 
      confirmationCode 
    },
    newUser,
    isLoading
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setValidValue, setValue, validate, toggleHover, togglePasswordVisibility, signUp, confirm
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);