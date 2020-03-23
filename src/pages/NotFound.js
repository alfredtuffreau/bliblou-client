import React, { Component } from "react";
import { bool } from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import icon from "../images/fire.png";
import { formattedText } from "../translations";
import withScrollTop from "../components/view/withScrollTop";
import { HOME, LOGIN } from "../modules/Navigation";

import "./NotFound.css";

class NotFound extends Component {
  handleOnClick = () => {
    this.props.history.goBack();
  }

  render() {
    const { isAuthenticated } = this.props;
    
    const back = (
      <Button key="back" variant="link"
        onClick={ this.handleOnClick }>
        { formattedText("app.pageNotFound.links.back") }
      </Button>
    );
    const home = (
      <Link key="home" to={ HOME }>
        <Button variant="link">
          { formattedText("app.pageNotFound.links.home") }
        </Button>
      </Link>
    );
    const login = (
      <Link key="login" to={ LOGIN }>
        <Button variant="link">
          { formattedText("app.pageNotFound.links.login") }
        </Button>
      </Link>
    );

    const links = [ back, "|", home ];
    if (!isAuthenticated) links.push("|", login);

    return (
      <div className="with-background-image">
        <div className="content centered-content">
          <h2>{ formattedText("app.pageNotFound.title") }</h2>
          <h3>{ formattedText("app.pageNotFound.description") }</h3>
          <img src={ icon } alt="Not found" className="not-found-image centered-image" />
          <div>{ links }</div>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  isAuthenticated: bool
}

NotFound.defaultProps = {
  isAuthenticated: false
}

export default withScrollTop(NotFound);
