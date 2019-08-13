// import React, { Component } from "react";
// import { string, func, bool } from "prop-types";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { Form as BootstrapForm, Nav, Button } from "react-bootstrap";

// import { formattedText } from "../../translations";

// import "./Form.css";
// import MailInput from "./components/MailInput";
// import { resetPasswordForm } from "./selectors";
// import { setIsLoading, setIsSent, clear } from "./actions";

// class IdentificationForm extends Component {
//   validateForm = () => {
//     return this.props.newPassword.length > 0 && this.props.confirmationCode;
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { mail, forgotPassword, setIsLoading, setIsSent } = this.props;

//     setIsLoading(true)
    
//     try {
//       await alert(`Submit: ${newPaswword} - ${confirmationCode}`);
//     } catch (err) {
//       alert(err.message);
//     }
    
//     setIsLoading(false);
//   };

//   handleOnClick = () => {
//     const { history, clear } = this.props;
//     history.goBack();
//     clear();
//   }

//   render () {
//     const { isLoading  } = this.props;
//     return (
//       <BootstrapForm  onSubmit={ this.handleSubmit } className="ResetPassword">
//         <MailInput />
//         <Nav className="justify-content-end">
//           <Nav.Item>
//             <Button variant="link"
//                     onClick={ this.handleOnClick }>
//               { formattedText("resetPassword.cancel") }
//             </Button>
//           </Nav.Item>
//           <Nav.Item>
//             <Button variant="success"
//                     type="submit"
//                     size="lg"
//                     disabled={ !this.validateForm() || isLoading }>
//               { !isLoading
//                   ? formattedText("resetPassword.sendEmail")
//                   : formattedText("resetPassword.sendingEmail") }
//             </Button>
//           </Nav.Item>
//         </Nav>
//       </BootstrapForm>
//     );
//   }
// }

// IdentificationForm.propTypes = {
//   mail: string,
//   isLoading: bool,
//   forgotPassword: func.isRequired,
//   setIsLoading: func.isRequired,
//   setIsSent: func.isRequired,
//   clear: func.isRequired,
// };

// IdentificationForm.defaultProps = {
//   mail: '',
//   isLoading : false,
// };

// const mapStateToProps = (state) => {
//   const { mail, isLoading } = resetPasswordForm(state);
//   return { mail, isLoading };
// };

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({ setIsLoading, setIsSent, clear }, dispatch)
// );

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IdentificationForm));
