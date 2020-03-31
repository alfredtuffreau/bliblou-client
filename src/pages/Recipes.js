import React, { useEffect } from "react";

import RecipesList from "../modules/RecipeBrowser";
import withScrollTop from "../components/view/withScrollTop";
import { loadCatalog } from "../modules/RecipeBrowser";
import { store } from "../store";

const lists = [ 
  { title: "Toutes les recettes" },
  { title: "Pour 6", predicate: ({ content }) => JSON.parse(content).nbOfPeople === 6 },
  { title: "Moins de 60 minutes", predicate: ({ content }) => {
    const { preparation, cookingAfterPreparation, resting: { before, after } } = JSON.parse(content).durations;
    return preparation + cookingAfterPreparation + before + after < 60;
  }}
]; 

const view = ({ isEditor }) => {
  useEffect(() => { store.dispatch(loadCatalog()) }, []);
  return (
    <div id="recipes" className="panel">
      { lists.map(({ title, predicate }) => (
        <RecipesList key = { title.split(' ').map(s => s.toLowerCase()).join("-") } 
                     title={ title } 
                     predicate={ predicate }
                     isEditor={ isEditor } />
      ))}
    </div>
  );
};

export default withScrollTop(view);
