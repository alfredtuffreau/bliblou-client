import React, { Component } from "react";
import { string } from "prop-types";
import { CardGroup } from "react-bootstrap";

class CardList extends Component {
  render() {
    const { title, description, children } = this.props;

    return (
      <>
        <h2>{ title }</h2>
        { description ? <p>{ description }</p> : <></> }
        <div className="card-list">
          <CardGroup> 
            { children }
          </CardGroup>
        </div>
      </>
    );
  }
}

CardList.propTypes = {
  title: string.isRequired,
  description: string,
};

CardList.defaultProps = {
  description: undefined,
};

export default CardList;
