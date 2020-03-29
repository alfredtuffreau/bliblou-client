import React, { Component } from "react";
import { bool } from "prop-types";
import { NavLink } from "react-router-dom";


import icon from "../images/fire.png";
import withScrollTop from "../components/view/withScrollTop";
import { HOME, LOGIN } from "../modules/Navigation";

class NotFound extends Component {
  handleOnClick = () => {
    this.props.history.goBack();
  }

  render() {
    const { isAuthenticated } = this.props;
    
    const back = (
      <NavLink key="back" to="#" onClick={ this.handleOnClick }>
        Page précédente
      </NavLink>
    );
    const home = (
      <NavLink key="home" to={ HOME }>
        Page d'accueil
      </NavLink>
    );
    const login = (
      <NavLink key="login" to={ LOGIN }>
        S'identifier
      </NavLink>
    );

    const links = [ back, "|", home ];
    if (!isAuthenticated) links.push("|", login);

    return (
      <div className="not-found image-panel">
        <div>
          <h2>Oups, page introuvable</h2>
          <h3>La page que vous recherchez a peut-être été supprimée.</h3>
          <img src={ icon } alt="Not found" />
          { links }
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
