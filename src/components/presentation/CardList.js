import React, { Component } from "react";
import { string } from "prop-types";
import { Row, CardGroup } from "react-bootstrap";

import "./CardList.css";

class CardList extends Component {
  render() {
    const { title, description, children } = this.props;

    return (
      <div className="card-list">
        <h2>{ title }</h2>
        { 
          !description 
            ? <></>
            : <p>{ description }</p> 
        }
        <Row>
          <CardGroup> 
            { children }
          </CardGroup>
        </Row>
      </div>
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
