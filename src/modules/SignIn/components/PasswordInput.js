import React, { Component } from "react";
import { bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { formattedText } from "../../../translations";
import { setPassword, togglePasswordVisibility as toggleVisibility, clear } from "../actions";
import { signInForm } from "../selectors";
import { LOST_PASSWORD } from "../../../Routes";

class PasswordInput extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setPassword } = this.props;
    setPassword(value);
  }

  handleOnToggleVisibilityCLick = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility();
  }

  handleOnLostPaswordLink = () => {
    const { clear } = this.props;
    clear();
  }

  render () {
    const { password, isClear } = this.props;

    return (
      <Form.Group controlId="password">
        <Form.Label hidden>{ formattedText("signIn.password.label") }</Form.Label>
        <InputGroup>
          <Form.Control
            type={ isClear ? "text" : "password" }
            value={ password }
            placeholder={ formattedText("signIn.password.label") }
            aria-describedby="pwdAppend"
            onChange={ this.handleOnChange }
            required
          />
          <InputGroup.Append>
            <span onClick={ this.handleOnToggleVisibilityCLick }>
              <InputGroup.Text className="pointerHover"
                               id="pwdAppend">
                { isClear
                    ? formattedText("signIn.password.hide")
                    : formattedText("signIn.password.display") }
              </InputGroup.Text>
            </span>
          </InputGroup.Append>
        </InputGroup>
        <Link to={ LOST_PASSWORD } onClick={ this.handleOnLostPaswordLink }>Mot de passe oublié ?</Link>
      </Form.Group>
    );
  };
};

PasswordInput.propTypes = {
  isClear: bool.isRequired,
  setPassword: func.isRequired,
  toggleVisibility: func.isRequired,
  clear: func.isRequired,
};

const mapStateToProps = (state) => {
  const { password, isPasswordVisible } = signInForm(state);
  return { password, isClear: isPasswordVisible };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPassword, toggleVisibility, clear }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);
