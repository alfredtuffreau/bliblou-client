import React, { useEffect } from "react";
import { string, object, func } from "prop-types";
import { withRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaRegClock, FaUsers } from 'react-icons/fa';

import "./RecipeView.css";

import ActionButtons from "./ActionButtons";
import SuggestionsList from "./SuggestionsList";

const RecipeView = ({ id, content, picture, src, isLoading, onLoad, onDelete, onEdit, clear, history }) => {
  useEffect(() => { 
    onLoad(id, history);
    return () => clear(); 
  }, [id]);

  const { 
    title = "", 
    description = "", 
    durations: { 
      preparation = 0, 
      cookingAfterPreparation = 0, 
      resting: { before = 0, after = 0 } = {}
    } = {},
    nbOfPeople = 0,
    ingredients = [],
    steps = [],
    suggestions = []
  } = content;

  const handleOnDelete = () => {
    if (window.confirm("La recette va être supprimée définitivement. Voulez-vous continuer ?")) 
      onDelete(id, picture, history);
  };

  const handleOnEdit = () => {
    onEdit(id, history);
  };

  return isLoading
    ? <></>
    : (
      <div className="recipe-view">
        <div className="recipe-content margin-bottom-8">
          { 
            !src
              ? <></>
              : <div className="recipe-pic-container pull-right">
                  <div className="recipe-pic"
                      style={{ backgroundImage: `-webkit-linear-gradient(left, black, transparent 40%), url(${src})` }} />
                </div>
          }
          <h1>{ title }</h1>
          <p>{ description }</p>
          <table className="info-table">
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
          { 
            ingredients.length === 0 
              ? <></>
              : <>
                  <h2>Ingrédients</h2>
                  { ingredients.map((ingredient, index) => (
                    <p key={ `ingredient-${index}` }>
                      { ingredient }
                    </p>
                  )) }
                </> 
          }
          { 
            steps.length === 0 
              ? <></>
              : <>
                  <h2>Préparation</h2>
                  { steps.map((step, index) => (
                    <p key={ `step-${index}` }>
                      <span className="pink">{ index }</span> - { step }
                    </p>
                  )) }
                </> 
          }
        </div>
        <ActionButtons className={ suggestions.length !== 0 ? "margin-top-16" : "" } 
                       onDelete={ handleOnDelete }
                       onEdit={ handleOnEdit } />
        <SuggestionsList suggestions={ suggestions } />
      </div>
    );
};

RecipeView.propTypes = {
  id: string.isRequired,
  content: object,
  picture: string,
  src: string,
  onLoad: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  clear: func.isRequired
};

RecipeView.defaultProps = {
  content: {},
  picture: undefined,
  src: undefined,
};

export default withRouter(RecipeView);
