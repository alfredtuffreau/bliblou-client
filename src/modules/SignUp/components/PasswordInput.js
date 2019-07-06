import React, { Component } from "react";
import { bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";

import { setPassword, togglePasswordVisibility as toggleVisibility } from "../actions";
import { signUpForm } from "../selectors";

class PasswordInput extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setPassword } = this.props;
    setPassword(value);
  }

  handleOnCLick = () => {
    this.props.toggleVisibility();
  }

  render () {
    const label = "Mot de passe";
    const { password, isClear } = this.props;

    return (
      <Form.Group controlId="password">
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <Form.Control
            type={ isClear ? "text" : "password" }
            value={ password }
            placeholder={ label }
            aria-describedby="pwdAppend"
            onChange={ (e) => this.handleOnChange(e) }
            required
          />
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
  isClear: bool.isRequired,
  setPassword: func.isRequired,
  toggleVisibility: func.isRequired,
};

const mapStateToProps = (state) => {
  const { password, isPasswordVisible } = signUpForm(state);
  return { password, isClear: isPasswordVisible };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPassword, toggleVisibility }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);
