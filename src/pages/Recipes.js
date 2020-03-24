import React, { useEffect } from "react";

import RecipesList from "../modules/RecipeBrowser";
import withScrollTop from "../components/view/withScrollTop";
import { loadCatalog } from "../modules/RecipeBrowser";
import { store } from "../store";

const lists = [ 
  { title: "Toutes les recettes" },
  { title: "Pour 4", predicate: ({ content }) => JSON.parse(content).nbOfPeople === 4 }
]; 

const view = ({ isEditor }) => {
  useEffect(() => { store.dispatch(loadCatalog()) }, []);
  return lists.map(({ title, predicate }) => (
    <RecipesList key = { title.split(' ').map(s => s.toLowerCase()).join("-") } 
                 title={ title } 
                 predicate={ predicate }
                 isEditor={ isEditor } />
  ));
};

export default withScrollTop(view);
