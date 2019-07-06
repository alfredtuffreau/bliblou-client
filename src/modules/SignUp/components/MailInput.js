import React, { Component } from "react";
import { string, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

import { setMail } from "../actions";
import { signUpForm } from "../selectors";

class MailInput extends Component {
    handleOnChange = ({ target: { value } }) => {
      const { setMail }= this.props;
      setMail(value);
    }

    render () {
      const { mail } = this.props;
      const label = "Adresse email";
      return (
        <Form.Group controlId="mail">
          <Form.Label hidden>{ label }</Form.Label>
          <Form.Control type="mail"
                        value={ mail }
                        placeholder={ label }
                        onChange={ (e) => this.handleOnChange(e) }
                        required />
        </Form.Group>
      );
    }
}

MailInput.propTypes = {
  mail: string,
  setMail: func.isRequired,
};

MailInput.defaultProps = {
  mail: "",
};

const mapStateToProps = state => {
  const { mail } = signUpForm(state);
  return { mail };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setMail }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MailInput);
