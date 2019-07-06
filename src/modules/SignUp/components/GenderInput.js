import React, { Component } from "react";
import { string, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";

import { setGender } from "../actions";
import { signUpForm } from "../selectors";

class GenderInput extends Component {
  handleOnCLick = (newGender) => {
    const { gender, setGender } = this.props;

    if (gender === "Male" || gender === "Female") setGender(newGender);
    if (newGender === "Male" || newGender === "Female") setGender(newGender);
  }

  handleOnChange = ({ target: { value } }) => {
    this.props.setGender(value);
  }

  render () {
    const label = "Autre";
    const { gender } = this.props;

    return (
      <Form.Group controlId="gender">
        <Form.Label hidden>{ label }</Form.Label>
        <InputGroup>
          {/*
            TODO implement option to switch sex color on any gender click
                           + set LE BLIBLOU title color
          */}
          <InputGroup.Prepend>
            <Button variant={ gender === "Male" ? "primary" : "light" }
                    onClick={ () => this.handleOnCLick("Male") }
                    className={ gender !== "Male" ? "input-group-text" : undefined }>
              Homme
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button variant={ gender === "Female" ? "pink" : "light" }
                    onClick={ () => this.handleOnCLick("Female") }
                    className={ gender !== "Female" ? "input-group-text" : undefined }>
              Femme
            </Button>
          </InputGroup.Prepend>
          <Form.Control type="text"
                        placeholder={ label }
                        onFocus={ () => this.handleOnCLick('') }
                        onChange={ e => this.handleOnChange(e) }
                        value={ gender === "Male" || gender === "Female" ? "" : gender }/>
        </InputGroup>
      </Form.Group>
    );
  }
}

GenderInput.propTypes = {
  gender: string,
  setGender: func.isRequired
}

GenderInput.defaultProps = {
  gender: '',
}

const mapStateToProps = (state) => {
  const { gender } = signUpForm(state);
  return { gender };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setGender }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GenderInput);
