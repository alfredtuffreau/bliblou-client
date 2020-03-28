import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";

const FEMALE = "Female";
const MALE = "Male";
const GENDER = "gender";

class GenderInput extends Component {
  getClassName = (field) => {
    const { value, isValid } = this.props.gender;
    const classes = [ "btn-gender" ];
    
    if (isValid === false && field === FEMALE) classes.push("middle-button is-invalid"); 
    if (isValid === false && field === MALE) classes.push("left-button is-invalid"); 
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
    const label = "Gender";
    const { gender: { value, isValid } } = this.props;
    return (
      <Form.Group controlId={ GENDER }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup id="gender-input">
          <InputGroup.Prepend>
            <Button variant={ value !== MALE ? "light" : undefined }
                    onClick={ () => this.handleOnCLick(MALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ this.handleOnHover } 
                    onMouseLeave={ this.handleOnHover }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ value !== FEMALE ? "light" : undefined }
                    onClick={ () => this.handleOnCLick(FEMALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ this.handleOnHover } 
                    onMouseLeave={ this.handleOnHover }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder="Autre"
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
