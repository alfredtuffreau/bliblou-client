import React, { Component } from "react";
import { string, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import approve from "approvejs";

import { setMail, setMailValidity, toggleHoverMailInput } from "../actions";
import { signUpForm } from "../selectors";
import withValidationTooltip from "../../../components/ValidationTooltip";

const ALERT_MESSAGE = "Saisissez une adresse valide";

class MailInput extends Component {
    handleOnChange = ({ target: { value } }) => {
      const { setMail }= this.props;
      setMail(value);
    }

    handleOnBlur = ({ target: { value } }) => {
      const { setMailValidity } = this.props;
      const { approved } = approve.value(value, { stop: true, required: true, email: true });
      setMailValidity(approved);
    }

    toggleHover = () => {
      const { toggleHoverMailInput } = this.props;
      toggleHoverMailInput();
    }

    render () {
      const { mail, isMailValid } = this.props;
      const label = "Adresse email";

      return (
        <Form.Group controlId="mail">
          <Form.Label hidden>{ label }</Form.Label>
          <Form.Control type="mail"
                        value={ mail }
                        placeholder={ label }
                        isInvalid = { isMailValid === false }
                        onChange={ (e) => this.handleOnChange(e) }
                        onBlur={ (e) => this.handleOnBlur(e) }
                        onMouseEnter={ this.toggleHover } 
                        onMouseLeave={ this.toggleHover } />
        </Form.Group>
      );
    }
}

MailInput.propTypes = {
  mail: string,
  isMailValid: string,
  setMail: func.isRequired,
  setMailValidity: func.isRequired,
  toggleHoverMailInput: func.isRequired,
};

MailInput.defaultProps = {
  mail: "",
  isMailValid: undefined,
};

const mapStateToProps = state => {
  const { 
    mail, isMailValid, isHoverMailInput 
  } = signUpForm(state);

  return ({ 
    mail, 
    isMailValid,
    showTooltip: isHoverMailInput && isMailValid === false,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setMail, setMailValidity, toggleHoverMailInput 
  }, dispatch)
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(withValidationTooltip(MailInput, ALERT_MESSAGE));
