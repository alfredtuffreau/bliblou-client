import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Col, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import approve from "approvejs";

import { 
  setFirstname, 
  setFirstnameValidity, 
  setLastname, 
  setLastnameValidity, 
  toggleHoverNamesInput 
} from "../actions";
import { signUpForm } from "../selectors.js";
import withValidationTooltip from "../../../components/ValidationTooltip";

const FIRSTNAME = "firstname";
const LASTNAME = "lastname";
const ALERT_MESSAGE = "Saisissez votre nom complet";
const actions = {};

class NamesInput extends Component {

  constructor(props) {
    super(props);

    const { setFirstname, setFirstnameValidity, setLastname, setLastnameValidity } = this.props;
    actions[FIRSTNAME] = { setValue: setFirstname, setValidity: setFirstnameValidity };
    actions[LASTNAME] = { setValue: setLastname, setValidity: setLastnameValidity };

    this.ref = React.createRef();
  }

  handleOnChange = (field, { target: { value } }) => {
    actions[field].setValue(value);
  }

  handleOnBlur = (field, { target: { value } }) => {
    const { approved } = approve.value(value, { required: true });
    actions[field].setValidity(approved);
  }

  toggleHover = () => {
    const { toggleHoverNamesInput } = this.props;
    toggleHoverNamesInput();
  }

  render () {
    const { firstname, isFirstnameValid, lastname, isLastnameValid } = this.props;
    const lastnameLabel = "Nom";
    const firstnameLabel = "Prénom";

    return (
      <Form.Row ref={ this.ref }>
          <Form.Group as={ Col } controlId={ FIRSTNAME }>
            <Form.Label hidden>{ firstnameLabel }</Form.Label>
            <Form.Control type="text"
                          placeholder={ firstnameLabel }
                          value={ firstname }
                          isInvalid = { isFirstnameValid === false }
                          onChange={ (e) => this.handleOnChange(FIRSTNAME, e) }
                          onBlur={ (e) => this.handleOnBlur(FIRSTNAME, e) }
                          onMouseEnter={ this.toggleHover } 
                          onMouseLeave={ this.toggleHover } />
          </Form.Group>
          
          <Form.Group as={ Col } controlId={ LASTNAME }>
            <Form.Label hidden>{ lastnameLabel }</Form.Label>
            <Form.Control type="text"
                          placeholder={ lastnameLabel }
                          value={ lastname }
                          isInvalid = { isLastnameValid === false }
                          onChange={ (e) => this.handleOnChange(LASTNAME, e) }
                          onBlur={ (e) => this.handleOnBlur(LASTNAME, e) }
                          onMouseEnter={ this.toggleHover } 
                          onMouseLeave={ this.toggleHover } />
          </Form.Group>
        </Form.Row>
    );
  }
}

NamesInput.propTypes = {
  firstname: string,
  isFirstnameValid: bool,
  lastname: string,
  isLastnameValid: bool,
  isHoverNamesInput: bool,
  setFirstname: func.isRequired,
  setLastname: func.isRequired,
  setFirstnameValidity: func.isRequired,
  setLastnameValidity: func.isRequired,
  toggleHoverNamesInput: func.isRequired,
};

NamesInput.defaultProps = { 
  firstname: "",
  isFirstnameValid: undefined, 
  lastname:"",
  isLastnameValid: undefined,
  isHoverNamesInput: false,
};

const mapStateToProps = (state) => {
  const { 
    firstname, isFirstnameValid, lastname, isLastnameValid, isHoverNamesInput,
  } = signUpForm(state);

  return ({ 
    firstname, 
    isFirstnameValid, 
    lastname, 
    isLastnameValid,
    showTooltip: isHoverNamesInput && (isFirstnameValid === false || isLastnameValid === false),
  });
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    setFirstname, setFirstnameValidity, setLastname, setLastnameValidity, toggleHoverNamesInput 
  }, dispatch)
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(withValidationTooltip(NamesInput, ALERT_MESSAGE, true));
