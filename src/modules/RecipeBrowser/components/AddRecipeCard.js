import React, { Component } from "react";
import { bool, number, string, func } from "prop-types"
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

import "./AddRecipeCard.css";

const ICON_SIZE = 2;

class AddRecipeCard extends Component {
  handleOnClick = () => {
    const { onClick, history } = this.props;
    onClick(null, history);
  }

  render() {
    const { isEditor, className, height, width } = this.props;
    return !isEditor
      ? <></>
      : (
        <Card style={{ width: `${width}rem`, minWidth: `${width}rem` }} 
              className={ `add-recipe-card ${className || ""}` }
              key="new-recipe"
              onClick={ this.handleOnClick }>
          <div style={{ position: "relative", height: `${height}rem` }}
              className="card-img">
            <IconContext.Provider value={{ color: "black", size: `${ICON_SIZE}em` }}>
              <FaPlus style={{ 
                margin: "0", 
                position: "absolute", 
                top: `${(height - ICON_SIZE) / 2}rem`, 
                left: `${(width - ICON_SIZE) / 2}rem` }} />
            </IconContext.Provider>
          </div>
          <Card.Body>
            <Card.Title key="new-recipe">Nouvelle recette</Card.Title>
          </Card.Body>
        </Card>
      );
  }
};

AddRecipeCard.propTypes = {
  isEditor: bool,
  className: string,
  height: number.isRequired,
  width: number.isRequired,
  onClick: func.isRequired,
}

AddRecipeCard.defaultProps = {
  isEditor: undefined,
  className: "",
}

export default withRouter(AddRecipeCard);
