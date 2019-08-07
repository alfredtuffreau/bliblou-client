import React, { Component } from "react";
import { bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";

import { formattedText } from "../../../translations";
import { setPassword, togglePasswordVisibility as toggleVisibility } from "../actions";
import { signInForm } from "../selectors";

class PasswordInput extends Component {
  handleOnChange = ({ target: { value } }) => {
    const { setPassword } = this.props;
    setPassword(value);
  }

  handleOnCLick = () => {
    this.props.toggleVisibility();
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
            onChange={ (e) => this.handleOnChange(e) }
            required
          />
          <InputGroup.Append>
            <span onClick={ () => this.handleOnCLick() }>
              <InputGroup.Text className="pointerHover"
                               id="pwdAppend">
                { isClear
                    ? formattedText("signIn.password.hide")
                    : formattedText("signIn.password.display") }
              </InputGroup.Text>
            </span>
          </InputGroup.Append>
        </InputGroup>
        {/* <NavLink to="https://www.w3schools.com"> */}
        <div>
          <a href="https://www.w3schools.com">Mot de passe oublié ?</a>
        </div>
        {/* </NavLink> */}
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
  const { password, isPasswordVisible } = signInForm(state);
  return { password, isClear: isPasswordVisible };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPassword, toggleVisibility }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);
