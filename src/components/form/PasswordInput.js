import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ValidationTooltip from "./ValidationTooltip";

const SPECIAL_CHARACTERS = "^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ `";
const PASSWORD_ALERT_MESSAGE = (
  <>
    <p>Le mot de passe doit contenir 8 caractères dont :
      <br />au moins 1 chiffre
      <br />au moins 1 majuscule
      <br />au moins 1 minuscule
      <br />au moins 1 caractère spécial : <strong>{ SPECIAL_CHARACTERS }</strong>
    </p>
  </>
);

class PasswordInput extends Component {
  constructor (props) {
    super(props);
    this.state = { isHover: false, isFocus: false };
    this.attachRef = target => this.setState({ target });
  }

  handleOnChange = ({ target: { id, value } }) => {
    this.props.onChange(id, value);
  };

  handleOnFocus = () => {
    this.setState({ isFocus: true });
  };

  handleOnBlur = ({ target: { id, value } }) => {
    const rules = { 
      required: true, 
      format: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]).*$/ 
    };
    this.props.onBlur(id, value, rules);
    this.setState({ isFocus: false });
  };

  handleOnMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHover: false });
  };

  handleOnCLick = () => {
    this.props.onClick();
  };

  render () {
    const { id, label, value, isValid, isClear, withLinkTo } = this.props;
    const { target, isHover, isFocus } = this.state;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup ref={ this.attachRef }>
          <Form.Control aria-describedby="pwdAppend"
                        type={ isClear ? "text" : "password" }
                        placeholder={ label }
                        value={ value }
                        isInvalid = { isValid === false }
                        className="password"
                        onChange={ this.handleOnChange }
                        onFocus={ this.handleOnFocus }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnMouseEnter }
                        onMouseLeave={ this.handleOnMouseLeave } />
          <InputGroup.Append>
            <Button variant="light" 
                    onMouseDown={ (e) => e.preventDefault() }
                    onFocus={ this.handleOnFocus }
                    onBlur={ this.handleOnBlur }
                    onClick={ this.handleOnCLick }
                    onMouseEnter={ this.handleOnMouseEnter }
                    onMouseLeave={ this.handleOnMouseLeave }>
              { isClear ? "Masquer" : "Afficher" }
            </Button>
          </InputGroup.Append>
        </InputGroup>
        { target 
          ? <ValidationTooltip message={ PASSWORD_ALERT_MESSAGE } 
                                  target={ target } 
                                  isHover={ isHover } 
                                  isFocus={ isFocus } 
                                  isValid={ isValid } />
          : null }
        { withLinkTo 
          ? <Link to={ withLinkTo }>Mot de passe oublié ?</Link> 
          : <></> }
      </Form.Group>
    );
  };
};

PasswordInput.propTypes = {
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  isClear: bool,
  withLinkTo: string,
  onChange: func,
  onBlur: func,
  onClick: func
};

PasswordInput.defaultProps = { 
  label: "Mot de passe",
  value: undefined,
  isValid: undefined,
  isClear: false,
  withLinkTo: undefined,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {}
};

export default PasswordInput;
