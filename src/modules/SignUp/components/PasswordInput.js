import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import approve from "approvejs";

import { 
  setPassword, 
  setPasswordValidity, 
  toggleHoverPasswordInput, 
  togglePasswordVisibility as toggleVisibility 
} from "../actions";
import { signUpForm } from "../selectors";
import withValidationTooltip from "../../../components/ValidationTooltip";

const SPECIAL_CHARACTERS = "^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ `";
const ALERT_MESSAGE = (
  <div>
    <p>Le mot de passe doit contenir:</p>
    <ul>
      <li>8 caractères</li>
      <li>des chiffres</li>
      <li>des majuscules</li>
      <li>des minuscules</li>
      <li><p>1 caractère spécial</p><p>{ SPECIAL_CHARACTERS }</p></li>
    </ul>
  </div>
);

class PasswordInput extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setPassword } = this.props;
    setPassword(value);
  }

  handleOnBlur = ({ target: { value } }) => {
    const rule = { 
      required: true, 
      format: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]).*$/ 
    };
    const { setPasswordValidity } = this.props;
    const { approved } = approve.value(value, rule);
    setPasswordValidity(approved);
  }

  toggleHover = () => {
    const { toggleHoverPasswordInput } = this.props;
    toggleHoverPasswordInput();
  }

  handleOnCLick = () => {
    this.props.toggleVisibility();
  }

  render () {
    const label = "Mot de passe";
    const { password, isPasswordValid, isClear } = this.props;

    return (
      <Form.Group controlId="password">
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <Form.Control
            aria-describedby="pwdAppend"
            type={ isClear ? "text" : "password" }
            placeholder={ label }
            value={ password }
            isInvalid = { isPasswordValid === false }
            onChange={ (e) => this.handleOnChange(e) }
            onBlur={ (e) => this.handleOnBlur(e) }
            onMouseEnter={ this.toggleHover } 
            onMouseLeave={ this.toggleHover } />
          <InputGroup.Append>
            <span onClick={ () => this.handleOnCLick() }>
              <InputGroup.Text className="pointerHover"
                               id="pwdAppend">
                { isClear ? "Masquer" : "Afficher" }
              </InputGroup.Text>
            </span>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    );
  };
};

PasswordInput.propTypes = {
  password: string,
  isPasswordValid: bool,
  isClear: bool.isRequired,
  setPassword: func.isRequired,
  toggleVisibility: func.isRequired,
};

PasswordInput.defaultProps = {
  password: "",
  isPasswordValid: undefined,
};

const mapStateToProps = (state) => {
  const { 
    password, 
    isPasswordValid, 
    isHoverPasswordInput, 
    isPasswordVisible 
  } = signUpForm(state);

  return ({ 
    password,
    isPasswordValid,
    showTooltip: isHoverPasswordInput && isPasswordValid === false, 
    isClear: isPasswordVisible,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setPassword, setPasswordValidity, toggleHoverPasswordInput, toggleVisibility 
  }, dispatch)
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(withValidationTooltip(PasswordInput, ALERT_MESSAGE));
