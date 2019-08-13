import React, { Component } from "react";
import { shape, string, bool, func } from "prop-types";
import { Col, Form } from "react-bootstrap";

class NamesInput extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  handleOnChange = ({ target: {id: field, value } }) => {
    this.props.onChange(field, value);
  }

  handleOnBlur = ({ target: { id: field, value } }) => {
    this.props.onBlur(field, value, { required: true });
  }

  handleOnHover = ({ target: { id: field } }) => {
    this.props.onHover(field);
  }

  render () {
    const { firstname, lastname } = this.props;
    const lastnameLabel = "Nom";
    const firstnameLabel = "Prénom";

    return (
      <Form.Row ref={ this.ref }>
        <Form.Group as={ Col } controlId="firstname">
          <Form.Label hidden>{ firstnameLabel }</Form.Label>
          <Form.Control type="text"
                        placeholder={ firstnameLabel }
                        value={ firstname.value }
                        isInvalid = { firstname.isValid === false }
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
        </Form.Group>
        
        <Form.Group as={ Col } controlId="lastname">
          <Form.Label hidden>{ lastnameLabel }</Form.Label>
          <Form.Control type="text"
                        placeholder={ lastnameLabel }
                        value={ lastname.value }
                        isInvalid = { lastname.isValid === false }
                        onChange={ this.handleOnChange }
                        onBlur={ this.handleOnBlur }
                        onMouseEnter={ this.handleOnHover } 
                        onMouseLeave={ this.handleOnHover } />
        </Form.Group>
      </Form.Row>
    );
  }
}

NamesInput.propTypes = {
  firstname: shape({
    value: string,
    isValid: bool,
  }),
  lastname: shape({
    value: string,
    isValid: bool,
  }),
  showTooltip: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onHover: func.isRequired,
};

NamesInput.defaultProps = { 
  firstname: {
    value: "",
    isValid: undefined,
  },
  lastname: {
    value: "",
    isValid: undefined,
  },
  showTooltip: false,
};

export default NamesInput;
