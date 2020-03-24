import React, { Component } from "react";
import { string } from "prop-types";
import { Row, CardGroup } from "react-bootstrap";

class CardList extends Component {
  render() {
    const { title, description, children } = this.props;

    return (
      <>
        <h2>{ title }</h2>
        { 
          !description 
            ? <></>
            : <p>{ description }</p> 
        }
        <Row className="card-list" noGutters>
          <CardGroup> 
            { children }
          </CardGroup>
        </Row>
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
