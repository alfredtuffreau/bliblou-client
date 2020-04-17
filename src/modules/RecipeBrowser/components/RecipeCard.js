import React, { Component } from "react";
import { number, string, object, func } from "prop-types";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MdInfoOutline} from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import defaultImage from "../../../images/building.png";
import { RECIPE } from "../../../modules/Navigation";

class RecipeCard extends Component {
  constructor (props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick () {
    const { index } = this.props;
    this.props.onInfoClick(index);
  };

  render () {
    const { recipeId, content: { title = ""}, src } = this.props;             
    return (
      <Card bg="light">
        <NavLink to={ RECIPE.replace(":recipeId", recipeId) } >
          <Card.Img src={ src || defaultImage } 
                    alt="Recipe image" 
                    className={ src ? undefined : "default-image"} />
        </NavLink>
        <Card.Body>
          <MdInfoOutline className="icon icon-sm" onClick={ this.handleOnClick }/>
          <Card.Title as={ NavLink } to={ RECIPE.replace(":recipeId", recipeId) }>
            { title.length > 60 ? `${title.substring(0, 60)}...` : title }
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  index: number.isRequired,
  recipeId: string.isRequired,
  content: object.isRequired,
  src: string,
  onInfoClick: func.isRequired
};

RecipeCard.defaultProps = {
  src: undefined
};

export default RecipeCard;
