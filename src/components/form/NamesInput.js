import React, { Component } from "react";
import { string, bool, func } from "prop-types";
import { Form, Col } from "react-bootstrap";

import ValidationTooltip from "./ValidationTooltip";

const NAMES_ALERT_MESSAGE = "Saisissez votre nom complet";

class NamesInput extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      isHoverFirstname: false, isFirstnameFocus: false,
      isHoverLastname: false, isLastnameFocus: false 
    };
    this.attachRef = target => this.setState({ target });
  }

  handleOnChange = ({ target: {id, value } }) => {
    this.props.onChange(id, value);
  };

  handleOnFocus = ({ target: { id } }) => {
    if (id === this.props.firstnameId) this.setState({ isFirstnameFocus: true });
    else this.setState({ isLastnameFocus: true });
  };
  
  handleOnBlur = ({ target: { id, value } }) => {
    this.props.onBlur(id, value, { stop: true, required: true, notBlank: true });
    if (id === this.props.firstnameId) this.setState({ isFirstnameFocus: false });
    else this.setState({ isLastnameFocus: false });
  };

  handleOnMouseEnter = ({ target: { id } }) => {
    if (id === this.props.firstnameId) this.setState({ isHoverFirstname: true });
    else this.setState({ isHoverLastname: true });
  };

  handleOnMouseLeave = ({ target: { id } }) => {
    if (id === this.props.firstnameId) this.setState({ isHoverFirstname: false });
    else this.setState({ isHoverLastname: false });
  };

  render () {
    const { 
      firstnameId, 
      firstnameLabel, 
      firstnameValue, 
      isFirstnameValid, 
      lastnameId, 
      lastnameLabel, 
      lastnameValue, 
      isLastnameValid
    } = this.props;
    const { target, isHoverFirstname, isHoverLastname, isFirstnameFocus, isLastnameFocus } = this.state;
    return (
      <>
        <Form.Row ref={ this.attachRef }>
          <Col key="firstname">
            <Form.Group controlId={ firstnameId }>
              <Form.Label hidden>{ firstnameLabel }</Form.Label>
              <Form.Control type="text"
                            placeholder={ firstnameLabel }
                            value={ firstnameValue }
                            isInvalid = { isFirstnameValid === false }
                            onChange={ this.handleOnChange }
                            onFocus={ this.handleOnFocus }
                            onBlur={ this.handleOnBlur }
                            onMouseEnter={ this.handleOnMouseEnter } 
                            onMouseLeave={ this.handleOnMouseLeave } />
            </Form.Group>
          </Col>
          <Col key="lastname">
            <Form.Group controlId={ lastnameId }>
              <Form.Label hidden>{ lastnameLabel }</Form.Label>
              <Form.Control type="text"
                            placeholder={ lastnameLabel }
                            value={ lastnameValue }
                            isInvalid = { isLastnameValid === false }
                            onChange={ this.handleOnChange }
                            onFocus={ this.handleOnFocus }
                            onBlur={ this.handleOnBlur }
                            onMouseEnter={ this.handleOnMouseEnter } 
                            onMouseLeave={ this.handleOnMouseLeave } />
            </Form.Group>
          </Col>
        </Form.Row>
        { target 
          ? <ValidationTooltip message={ NAMES_ALERT_MESSAGE } 
                               target={ target } 
                               isHover={ (isFirstnameValid === false && isHoverFirstname) 
                                 || (isLastnameValid === false && isHoverLastname) } 
                               isFocus={ (isFirstnameValid === false && isFirstnameFocus) 
                                 || (isLastnameValid === false && isLastnameFocus) } 
                               isValid={ isFirstnameValid !== false && isLastnameValid !== false } />
          : null }
      </>
    );
  }
}

NamesInput.propTypes = {
  firstnameId: string.isRequired, 
  firstnameLabel: string, 
  firstnameValue: string, 
  isFirstnameValid: bool,
  lastnameId: string.isRequired, 
  lastnameLabel: string, 
  lastnameValue: string, 
  isLastnameValid: bool,
  onChange: func,
  onBlur: func
};

NamesInput.defaultProps = { 
  firstnameLabel: "Prénom",
  firstnameValue: undefined,
  isFirstnameValid: undefined,
  lastnameLabel: "Nom",
  lastnameValue: undefined,
  isLastnameValid: undefined,
  onChange: () => {},
  onBlur: () => {}
};

export default NamesInput;
