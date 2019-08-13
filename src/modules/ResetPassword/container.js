import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setValue, validate, toggleHover, startReset, cancel } from "./actions";
import ResetPassword from "./components/ResetPassword";

const mapStateToProps = state => {
  const { isSent, isLoading, mail } = state.resetPassword;
  return ({ 
    isSent, 
    isLoading,
    mail: { ...mail, showTooltip: mail.isHover && mail.isValid === false } 
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setValue, validate, toggleHover, startReset, cancel
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);