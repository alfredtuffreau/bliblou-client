import React, { Component } from "react";
import { string } from "prop-types";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";


import defaultImage from "../../../images/building.png";
import RecipeInformations from "../../../components/presentation/RecipeInformations";
import { RECIPE } from "../../../modules/Navigation";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { overlay: false };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  
  onMouseEnter() {
    this.setState({ overlay: true });
  }
  
  onMouseLeave() {
    this.setState({ overlay: false });
  }

  render() {
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
    } = JSON.parse(content);
                          
    return (
      <Card as={ NavLink } 
            to={ RECIPE.replace(":recipeId", recipeId) } 
            bg="light"
            text="dark"
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }>
        <Card.Img src={ src || defaultImage } 
                  alt="Recipe image" 
                  className={ src ? undefined : "default-image"} />
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
        </Card.Body>
        { !overlay
            ? <></> 
            : (<Card.ImgOverlay>
                { 
                  description 
                    ? <Card.Text>{ description }</Card.Text>
                    : <></> 
                }
                <Card.Text as="div">
                  <RecipeInformations preparation={ preparation }
                                      cookingAfterPreparation={ cookingAfterPreparation }
                                      before={ before }
                                      after={ after }
                                      nbOfPeople={ nbOfPeople } />
                </Card.Text>
              </Card.ImgOverlay>) }
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipeId: string.isRequired,
  src: string
};

RecipeCard.defaultProps = {
  src: undefined
};

export default RecipeCard;
