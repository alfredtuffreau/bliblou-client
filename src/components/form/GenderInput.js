import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";

const FEMALE = "Female";
const MALE = "Male";

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

  handleOnCLick = ({ target: { id: field } }, newGender) => {
    this.props.onClick(field, newGender);
  }

  handleOnChange = ({ target: { id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: { id: field, value } }) => {
    this.props.onBlur(field, value, { required: true });
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  }

  render () {
    const { id, label, value, isValid } = this.props;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup className="gender">
          <InputGroup.Prepend>
            <Button variant={ value !== MALE ? "light" : undefined }
                    onClick={ () => this.handleOnCLick({ target: { id } }, MALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ () => this.handleOnHover({ target: { id } }) } 
                    onMouseLeave={ () => this.handleOnHover({ target: { id } }) }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ value !== FEMALE ? "light" : undefined }
                    onClick={ () => this.handleOnCLick({ target: { id } }, FEMALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ () => this.handleOnHover({ target: { id } }) } 
                    onMouseLeave={ () => this.handleOnHover({ target: { id } }) }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder="Autre"
                        value={ value === "Male" || value === "Female" ? "" : value }
                        isInvalid = { isValid === false }
                        onFocus={ () => this.handleOnCLick({ target: { id } }, '') }
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
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onClick: func.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired
};

GenderInput.defaultProps = { 
  label: "Genre",
  value: "",
  isValid: undefined
};

export default GenderInput;
