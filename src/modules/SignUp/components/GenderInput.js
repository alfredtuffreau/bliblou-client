import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";
import approve from "approvejs";

import { 
  setGender,
  setGenderValidity,
  toggleHoverGenderInput,
} from "../actions";
import { signUpForm } from "../selectors";
import withValidationTooltip from "../../../components/ValidationTooltip";

import "./GenderInput.css";

const FEMALE = "Female";
const MALE = "Male";
const ALERT_MESSAGE = "Indiquez votre genre";

class GenderInput extends Component {
  getClassName = (field) => {
    const { gender, isGenderValid } = this.props;
    const classes = [];
    
    if (isGenderValid === false) classes.push("red-border-middle"); 
    if (field !== gender) classes.push("input-group-text"); 
    
    return classes.length === 0 
      ? undefined
      : classes.join(" ");
  }

  handleOnCLick = (newGender) => {
    const { setGender, setGenderValidity } = this.props;

    setGender(newGender);
    setGenderValidity(true);
  }

  handleOnChange = ({ target: { value } }) => {
    this.props.setGender(value);
  }

  handleOnBlur = ({ target: { value } }) => {
    const { approved } = approve.value(value, { required: true });
    this.props.setGenderValidity(approved);
  }

  toggleHover = () => {
    this.props.toggleHoverGenderInput();
  }

  render () {
    const label = "Autre";
    const { gender, isGenderValid } = this.props;

    return (
      <Form.Group controlId="gender">
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant={ gender === MALE ? "primary" : "light" }
                    className={ this.getClassName(MALE) }
                    onClick={ () => this.handleOnCLick(MALE) }
                    onMouseEnter={ this.toggleHover } 
                    onMouseLeave={ this.toggleHover }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ gender === FEMALE ? "pink" : "light" }
                    className={ this.getClassName(FEMALE) }
                    onClick={ () => this.handleOnCLick(FEMALE) }
                    onMouseEnter={ this.toggleHover } 
                    onMouseLeave={ this.toggleHover }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder={ label }
                        value={ gender === "Male" || gender === "Female" ? "" : gender }
                        isInvalid = { isGenderValid === false }
                        onFocus={ () => this.handleOnCLick('') }
                        onChange={ e => this.handleOnChange(e) }
                        onBlur={ (e) => this.handleOnBlur(e) }
                        onMouseEnter={ this.toggleHover } 
                        onMouseLeave={ this.toggleHover } />
        </InputGroup>
      </Form.Group>
    );
  }
}

GenderInput.propTypes = {
  gender: string,
  isGenderValid: bool,
  isHoverGenderInput: bool,
  setGender: func.isRequired,
  setGenderValidity: func.isRequired,
  toggleHoverGenderInput: func.isRequired,
}

GenderInput.defaultProps = {
  gender: '',
  isGenderValid: undefined,
  isHoverGenderInput: false,
}

const mapStateToProps = (state) => {
  const { 
    gender, isGenderValid, isHoverGenderInput
  } = signUpForm(state);

  return ({ 
    gender, 
    isGenderValid,
    showTooltip: isHoverGenderInput && isGenderValid === false,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setGender, setGenderValidity, toggleHoverGenderInput 
  }, dispatch)
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(withValidationTooltip(GenderInput, ALERT_MESSAGE));
