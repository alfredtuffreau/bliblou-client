import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class ConfirmationForm extends Component {
  handleOnChange = ({ target: { id: field, value } }) => {
		this.props.onChange(field, value);
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const {
      mail, password, confirmationCode, onSubmit, history
		} = this.props;
		
		onSubmit(mail, password, confirmationCode, history);
  };

  render () {
    const { confirmationCode, isLoading } = this.props;
    const label = "Code de vérification";

    return (
      <Form onSubmit={ this.handleOnSubmit } className="Confirm">
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label hidden>{ label }</Form.Label>
          <Form.Control autoFocus
																 type="tel"
																 value={ confirmationCode }
																 placeholder={ label }
																 onChange={ this.handleOnChange }
																 required />
          <Form.Text className="help">
            Consultez votre boîte mail pour le code de vérification
          </Form.Text>
        </Form.Group>
				
				{ isLoading
          ? (<Button variant="success" type="submit" size="lg" disabled>
               Verification...
             </Button>)
          : (<Button variant="success" type="submit" size="lg">
               Vérifier
             </Button>)}
      </Form>
    );
  }
}

ConfirmationForm.propTypes = {
	confirmationCode: string,
	mail: string,
	password: string,
	isLoading: bool,
	onChange: func.isRequired,
	onSubmit: func.isRequired,
};

ConfirmationForm.defaultProps = {
	confirmationCode: "",
	mail: "",
	password: "",
  isLoading : false,
};

export default withRouter(ConfirmationForm);
