import React, { Component } from "react";
import { bool, func } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";

import "./App.css";
import { formattedText } from "./translations";
import Routes, { HOME, LOGIN } from "./Routes";
import BrandNavBar from "./components/BrandNavBar";
import { user, userHasAuthenticated, userIsAuthenticating } from "./modules/User";

class App extends Component {
  async componentDidMount () {
    const { userHasAuthenticated, userIsAuthenticating } = this.props;
    await Auth.currentSession()
              .then(response => userHasAuthenticated(true))
              .catch(err => { if (err !== 'No current user') alert(err.message) });
    userIsAuthenticating(false);
  }

  handleLogout = async (event) => {
    const { userHasAuthenticated, history } = this.props;
    try {
      await Auth.signOut();
      userHasAuthenticated(false);
      history.push(LOGIN);
    } catch (err) {
      alert(err.message);
    }
  };

  render () {
    const { isAuthenticated, userHasAuthenticated, location: { pathname } } = this.props;
    const childProps = { isAuthenticated, userHasAuthenticated };

    return (
      <div className="App">
       <BrandNavBar handleLogout={ this.handleLogout }
                     isAuthenticated={ isAuthenticated }
                     redirect={ pathname === LOGIN
                       ? { label: formattedText("app.signUp"), href: HOME }
                       : { label: formattedText("app.signIn"), href: LOGIN } }
                     home={ HOME } />
        <Routes childProps={ childProps } />
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: bool.isRequired,
  userIsAuthenticating: func.isRequired,
  userHasAuthenticated: func.isRequired,
}

const mapStateToProps = state => {
  const { isAuthenticated } = user(state);
  return { isAuthenticated };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ userIsAuthenticating, userHasAuthenticated }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
