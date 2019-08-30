import React, { Component } from "react";
import { string } from "prop-types"

class Catcher extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </>
    );
  }
}

Catcher.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
}

export default Catcher;
