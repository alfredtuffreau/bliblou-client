import React, { Component } from "react";
import { string, number, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaRegClock, FaUsers } from 'react-icons/fa';

import defaultImage from "../../../images/building.png"

import "./RecipeCard.css";

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
    const { content, src, width, height, className } = this.props;
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
      <Card style={{ width: `${width}rem`, minWidth: `${width}rem` }}
            className={ `recipe-card ${className || ""}` }
            onClick={ this.handleOnClick }
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave } >
        <Card.Img src={ src || defaultImage } 
                  alt="Recipe image" 
                  className={ src ? "" : "default-image"}
                  style={{ height: `${height}rem` }} />
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
        </Card.Body>
        { 
          !this.state.overlay
            ? <></> 
            : (<Card.ImgOverlay>
                { 
                  description 
                    ? <Card.Text style={{ minHeight: "1.5em" }}>{ description }</Card.Text>
                    : <></> 
                }
                <Card.Text as="div">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <IconContext.Provider value={{ color: "#4CAE51", size: `1.25em` }}>
                            <FaRegClock style={{ marginBottom: "0.2em" }} />
                            { ` ${before + preparation + cookingAfterPreparation + after } minutes` }
                          </IconContext.Provider>
                        </td>
                        <td>
                          <IconContext.Provider value={{ color: "#4CAE51", size: `1.25em` }}>
                            <FaUsers style={{ marginBottom: "0.2em" }} />
                            { ` ${nbOfPeople } pers.` }
                          </IconContext.Provider>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Text>
              </Card.ImgOverlay>)
        }
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipeId: string.isRequired,
  src: string,
  width: number.isRequired,
  height: number.isRequired,
  className: string,
  onClick: func.isRequired,
};

RecipeCard.defaultProps = {
  src: undefined,
  className: "",
};

export default withRouter(RecipeCard);
