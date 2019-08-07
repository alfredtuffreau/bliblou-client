import React, { Component } from "react";
import { string, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

import { formattedText } from "../../../translations";
import { setMail } from "../actions";
import { resetPasswordForm } from "../selectors";

class MailInput extends Component {
    handleOnChange = ({ target: { value } }) => {
      const { setMail }= this.props;
      setMail(value);
    }

    render () {
      const { mail } = this.props;
      return (
        <Form.Group controlId="mail">
          <Form.Label hidden>{ formattedText("signIn.mail") }</Form.Label>
          <Form.Control type="mail"
                        value={ mail }
                        placeholder={ formattedText("signIn.mail") }
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
  const { mail } = resetPasswordForm(state);
  return { mail };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setMail }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MailInput);
