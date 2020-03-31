import React, { Component } from "react";
import { string } from "prop-types";
import { Row, CardGroup } from "react-bootstrap";

class CardList extends Component {
  render() {
    const { title, className, description, children } = this.props;

    return (
      <div className={ className }>
        <h2>{ title }</h2>
        { description ? <p>{ description }</p> : <></> }
        <div className="card-list">
          <CardGroup> 
            { children }
          </CardGroup>
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  title: string.isRequired,
  className: string,
  description: string,
};

CardList.defaultProps = {
  className: undefined,
  description: undefined,
};

export default CardList;
