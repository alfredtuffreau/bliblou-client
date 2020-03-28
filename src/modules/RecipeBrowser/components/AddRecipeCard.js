import React, { Component } from "react";
import { bool, func } from "prop-types"
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa';

class AddRecipeCard extends Component {
  handleOnClick = () => {
    const { onClick, history } = this.props;
    onClick(null, history);
  }

  render() {
    const { isEditor } = this.props;
    return !isEditor
      ? <></>
      : (
        <Card key="new-recipe"
              className="add"
              bg="light"
              text="dark"
              onClick={ this.handleOnClick }>
          <div className="card-img">
            <IconContext.Provider value={{ className: "icon" }}>
              <FaPlus />
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
  onClick: func.isRequired
}

AddRecipeCard.defaultProps = {
  isEditor: undefined
}

export default withRouter(AddRecipeCard);
