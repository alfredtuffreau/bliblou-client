import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

import icon from "../images/fire.png";
import { formattedText } from "../translations";
import { HOME } from "../Routes";

import "./NotFound.css";

class NotFound extends Component {
  handleOnCancelClick = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <div className="NotFound">
        <h2>{ formattedText("app.pageNotFound.title") }</h2>
        <h3>{ formattedText("app.pageNotFound.description") }</h3>
        <img src={ icon } alt="Not found" className="Icon" />
        <div>
          <Button variant="link"
                  onClick={ this.handleOnCancelClick }>
            { formattedText("app.pageNotFound.links.back") }
          </Button> 
          | 
          <Link to={ HOME }>
            <Button variant="link">
               { formattedText("app.pageNotFound.links.home") }
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(NotFound);
