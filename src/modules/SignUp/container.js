import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignUp from "./components/SignUp";
import { 
  setValidValue, setValue, validate, toggleHover , togglePasswordVisibility, signUp, confirm, clear
} from "./actions";

const mapStateToProps = state => {
  const { firstname, lastname, mail, password, gender, confirmationCode, newUser, isLoading } = state.signUp;

  return ({ 
    firstnameField: { ...firstname, id: "firstname", showTooltip: firstname.isHover && firstname.isValid === false }, 
    lastnameField: { ...lastname, id: "lastname", showTooltip: lastname.isHover && lastname.isValid === false },
    mailField: { ...mail, id: "mail", showTooltip: mail.isHover && mail.isValid === false },
    passwordField: { ...password, id: "password", showTooltip: password.isHover && password.isValid === false },
    genderField: { ...gender, id: "gender", showTooltip: gender.isHover && gender.isValid === false },
    confirmationCodeField: { ...confirmationCode, id: "confirmationCode", showTooltip: confirmationCode.isHover && confirmationCode.isValid === false },
    newUser,
    isLoading
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setValidValue, setValue, validate, toggleHover, togglePasswordVisibility, signUp, confirm, clear
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);