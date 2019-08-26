import React, { Component } from "react";
import { string } from "prop-types"

import "./Catcher.css";

class Catcher extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className="Catcher">
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    );
  }
}

Catcher.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
}

export default Catcher;
