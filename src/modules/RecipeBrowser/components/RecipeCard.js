import React, { Component } from "react";
import { string, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

import defaultImage from "../../../images/building.png"
import RecipeInformations from "../../../components/presentation/RecipeInformations";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { overlay: false };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  onMouseEnter() {
    this.setState({ overlay: true });
  }
  
  onMouseLeave() {
    this.setState({ overlay: false });
  }

  handleOnClick() {
    const { onClick, recipeId, history } = this.props;
    onClick(recipeId, history);
  }

  render() {
    const { overlay } = this.state;
    const { content, src } = this.props;
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
      <Card bg="light"
            text="dark"
            onClick={ this.handleOnClick }
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
  src: string,
  onClick: func.isRequired,
};

RecipeCard.defaultProps = {
  src: undefined
};

export default withRouter(RecipeCard);
