import React from "react";
import { string } from "prop-types";
import { CardGroup } from "react-bootstrap";

const CardList = ({ title, description, children }) => (
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

CardList.propTypes = {
  title: string.isRequired,
  description: string,
};

CardList.defaultProps = {
  description: undefined,
};

export default CardList;
