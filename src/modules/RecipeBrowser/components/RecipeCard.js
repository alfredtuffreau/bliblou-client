import React, { Component } from "react";
import { string, object } from "prop-types";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MdInfoOutline} from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import defaultImage from "../../../images/building.png";
import { RECIPE } from "../../../modules/Navigation";

class RecipeCard extends Component {
  constructor (props) {
    super(props);
    this.state = { overlay: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick () {
    const overlay = !this.state.overlay;
    this.setState({ overlay });
  };

  render () {
    const { overlay } = this.state;
    const { recipeId, content: { title = "", description = "" }, src } = this.props;
                          
    return (
      <Card bg="light">
        <NavLink to={ RECIPE.replace(":recipeId", recipeId) } >
          <Card.Img src={ src || defaultImage } 
                    alt="Recipe image" 
                    className={ src ? undefined : "default-image"} />
        </NavLink>
        <Card.Body>
          <MdInfoOutline className="icon icon-sm" onClick={ this.handleOnClick }/>
          <Card.Title as={ NavLink } to={ RECIPE.replace(":recipeId", recipeId) }>{ title }</Card.Title>
        </Card.Body>
        { !overlay
            ? <></> 
            : (<Card.ImgOverlay>
                <FaAngleDown className="icon icon-sm" onClick={ this.handleOnClick } />
                <NavLink to={ RECIPE.replace(":recipeId", recipeId) }>
                  { description 
                      ? <Card.Text>
                          { description.length > 230 
                            ? `${description.substring(0, 227)}...` 
                            : description }
                        </Card.Text>
                      : <></> }
                </NavLink>
              </Card.ImgOverlay>) }
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipeId: string.isRequired,
  content: object.isRequired,
  src: string
};

RecipeCard.defaultProps = {
  src: undefined
};

export default RecipeCard;
