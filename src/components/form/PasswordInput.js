import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PasswordInput extends Component {
  handleOnChange = ({ target: { id, value } }) => {
    this.props.onChange(id, value);
  }

  handleOnBlur = ({ target: { id, value } }) => {
    const rules = { 
      required: true, 
      format: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`]).*$/ 
    };
    this.props.onBlur(id, value, rules);
  }

  handleOnHover = ({ target: { id } }) => {
    this.props.onHover(id);
  }

  handleOnCLick = () => {
    this.props.onClick();
  }

  render () {
    const { id, label, value, isValid, isClear, withLinkTo } = this.props;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <Form.Control aria-describedby="pwdAppend"
                        type={ isClear ? "text" : "password" }
                        placeholder={ label }
                        value={ value }
                        isInvalid = { isValid === false }
                        className="password"
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
          <InputGroup.Append>
            <Button variant="light" 
                    onClick={ this.handleOnCLick }
                    onMouseDown={ (e) => e.preventDefault() }>
              { isClear ? "Masquer" : "Afficher" }
            </Button>
          </InputGroup.Append>
        </InputGroup>
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
  onChange: func.isRequired,
  onBlur: func,
  onHover: func,
  onClick: func.isRequired,
};

PasswordInput.defaultProps = { 
  label: "Mot de passe",
  value: "",
  isValid: undefined,
  isClear: false,
  withLinkTo: undefined,
  onBlur: () => {},
  onHover: () => {},
};

export default PasswordInput;
