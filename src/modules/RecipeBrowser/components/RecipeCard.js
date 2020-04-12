import React, { Component } from "react";
import { string, object } from "prop-types";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MdInfoOutline} from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import defaultImage from "../../../images/building.png";
import RecipeInformations from "../../../components/presentation/RecipeInformations";
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
    const { recipeId, content, src } = this.props;
    const { 
      title = "", 
      description = "", 
      durations: { 
        preparation = 0, 
        cookingAfterPreparation = 0, 
        resting: { before = 0, after = 0 } = {}
      } = {},
      nbOfPeople = 0
    } = content;
                          
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
                          { description.length > 190 
                            ? `${description.substring(0, 152)}...` 
                            : description }
                        </Card.Text>
                      : <></> }
                  <Card.Text as="div">
                    <RecipeInformations preparation={ preparation }
                                        cookingAfterPreparation={ cookingAfterPreparation }
                                        before={ before }
                                        after={ after }
                                        nbOfPeople={ nbOfPeople } />
                  </Card.Text>
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
