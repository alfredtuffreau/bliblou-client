import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form, InputGroup, Button } from "react-bootstrap";

import ValidationTooltip from "./ValidationTooltip";

const FEMALE = "Female";
const MALE = "Male";
const GENDER_ALERT_MESSAGE = "Indiquez votre genre";

class GenderInput extends Component {
  constructor (props) {
    super(props);
    this.state = { isHover: false, isFocus: false };
    this.attachRef = target => this.setState({ target });
  }

  getClassName = (id) => {
    const { value, isValid } = this.props.gender;
    const classes = [ "btn-gender" ];
    
    if (isValid === false && id === FEMALE) classes.push("middle-button is-invalid"); 
    if (isValid === false && id === MALE) classes.push("left-button is-invalid"); 
    if (id !== value) classes.push("input-group-text"); 
    
    return classes.length === 0 
      ? undefined
      : classes.join(" ");
  };

  handleOnCLick = ({ target: { id } }, newGender) => {
    this.props.onClick(id, newGender);
  };

  handleOnChange = ({ target: { id, value } }) => {
    this.props.onChange(id, value);
  };

  handleOnFocus = () => {
    this.setState({ isFocus: true });
  };

  handleOnBlur = ({ target: { id, value } }) => {
    this.setState({ isFocus: false });
    if (![ MALE, FEMALE ].includes(this.props.value))
      this.props.onBlur(id, value, { stop: true, required: true, notBlank: true });
  };

  handleOnMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render () {
    const { id, label, value, isValid } = this.props;
    const { target, isHover, isFocus } = this.state;
    return (
      <Form.Group controlId={ id }>
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup className="gender" ref={ this.attachRef }>
          <InputGroup.Prepend>
            <Button variant={ value !== MALE ? "light" : undefined }
                    onFocus={ this.handleOnFocus }
                    onBlur={ this.handleOnBlur }
                    onClick={ () => this.handleOnCLick({ target: { id } }, MALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ this.handleOnMouseEnter } 
                    onMouseLeave={ this.handleOnMouseLeave }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ value !== FEMALE ? "light" : undefined }
                    onFocus={ this.handleOnFocus }
                    onBlur={ this.handleOnBlur }
                    onClick={ () => this.handleOnCLick({ target: { id } }, FEMALE) }
                    onMouseDown={ (e) => e.preventDefault() }
                    onMouseEnter={ this.handleOnMouseEnter } 
                    onMouseLeave={ this.handleOnMouseLeave }
                    className={ isValid === false ? "is-invalid" : undefined }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder="Autre"
                        value={ value === "Male" || value === "Female" ? "" : value }
                        isInvalid = { isValid === false }
                        onChange={ this.handleOnChange }
                        onFocus={ this.handleOnFocus }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnMouseEnter } 
                        onMouseLeave={ this.handleOnMouseLeave } />
        </InputGroup>
        { target 
          ? <ValidationTooltip message={ GENDER_ALERT_MESSAGE } 
                               target={ target } 
                               isHover={ isHover } 
                               isFocus={ isFocus } 
                               isValid={ isValid } />
          : null }
      </Form.Group>
    );
  }
}

GenderInput.propTypes = {
  id: string.isRequired,
  label: string,
  value: string,
  isValid: bool,
  onClick: func,
  onChange: func,
  onBlur: func
};

GenderInput.defaultProps = { 
  label: "Genre",
  value: undefined,
  isValid: undefined,
  onClick: () => {},
  onChange: () => {},
  onBlur: () => {}
};

export default GenderInput;
