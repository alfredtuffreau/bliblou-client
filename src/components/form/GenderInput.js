import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";

import "./GenderInput.css";

const FEMALE = "Female";
const MALE = "Male";
const GENDER = "gender";

class GenderInput extends Component {
  getClassName = (field) => {
    const { value, isValid } = this.props.gender;
    const classes = [];
    
    if (isValid === false && field === FEMALE) classes.push("red-border-middle"); 
    if (isValid === false && field === MALE) classes.push("red-border-left"); 
    if (field !== value) classes.push("input-group-text"); 
    
    return classes.length === 0 
      ? undefined
      : classes.join(" ");
  }

  handleOnCLick = (newGender) => {
    this.props.onClick(GENDER, newGender);
  }

  handleOnChange = ({ target: { value } }) => {
    this.props.onChange(GENDER, value);
  }

  handleOnBlur = ({ target: { value } }) => {
    this.props.onBlur(GENDER, value, { required: true });
  }

  handleOnHover = () => {
    this.props.onHover(GENDER);
  }

  render () {
    const label = "Autre";
    const { gender: { value, isValid } } = this.props;

    return (
      <Form.Group controlId={ GENDER }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant={ value === MALE ? "primary" : "light" }
                    className={ this.getClassName(MALE) }
                    onClick={ () => this.handleOnCLick(MALE) }
                    onMouseEnter={ this.handleOnHover } 
                    onMouseLeave={ this.handleOnHover }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ value === FEMALE ? "pink" : "light" }
                    className={ this.getClassName(FEMALE) }
                    onClick={ () => this.handleOnCLick(FEMALE) }
                    onMouseEnter={ this.handleOnHover } 
                    onMouseLeave={ this.handleOnHover }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder={ label }
                        value={ value === "Male" || value === "Female" ? "" : value }
                        isInvalid = { isValid === false }
                        onFocus={ () => this.handleOnCLick('') }
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
        </InputGroup>
      </Form.Group>
    );
  }
}

GenderInput.propTypes = {
  gender: shape({
    value: string,
    isValid: bool,
  }),
  showTooltip: bool,
  onClick: func.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
};

GenderInput.defaultProps = { 
  gender: {
    value: "",
    isValid: undefined,
  },
  showTooltip: false,
};

export default GenderInput;
