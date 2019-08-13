import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class PasswordInput extends Component {
  handleOnChange = ({ target: { id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: { id: field, value } }) => {
    const rules = { 
      required: true, 
      format: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]).*$/ 
    };
    this.props.onBlur(field, value, rules);
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  }

  handleOnCLick = () => {
    this.props.onClick();
  }

  render () {
    const label = "Mot de passe";
    const { 
      password: { value, isValid, isClear }, 
      withLinkTo 
    } = this.props;

    return (
      <Form.Group controlId="password">
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <Form.Control aria-describedby="pwdAppend"
                        type={ isClear ? "text" : "password" }
                        placeholder={ label }
                        value={ value }
                        isInvalid = { isValid === false }
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
          <InputGroup.Append>
            <span onClick={ this.handleOnCLick }>
              <InputGroup.Text className="pointerHover"
                               id="pwdAppend">
                { isClear ? "Masquer" : "Afficher" }
              </InputGroup.Text>
            </span>
          </InputGroup.Append>
        </InputGroup>
        { withLinkTo 
          ? <Link to={ withLinkTo }>Mot de passe oublié ?</Link> 
          : <></>
        }
      </Form.Group>
    );
  };
};

PasswordInput.propTypes = {
  password: shape({
    value: string,
    isValid: bool,
    isClear: bool,
  }),
  showTooltip: bool,
  withLinkTo: string,
  onChange: func.isRequired,
  onBlur: func,
  onHover: func,
  onClick: func.isRequired,
};

PasswordInput.defaultProps = { 
  password: {
    value: "",
    isValid: undefined,
    isClear: false,
  },
  showTooltip: false,
  withLinkTo: undefined,
  onBlur: () => {},
  onHover: () => {},
};

export default PasswordInput;
