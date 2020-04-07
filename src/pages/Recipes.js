import React, { useEffect } from "react";

import RecipesList from "../modules/RecipeBrowser";
import withScrollTop from "../components/view/withScrollTop";
import { loadCatalog } from "../modules/RecipeBrowser";
import { store } from "../store";

const lists = [ 
  { title: "Les entrées", predicate: ({ content }) => JSON.parse(content).courses.includes("entree") },
  { title: "Les salades", predicate: ({ content }) => JSON.parse(content).courses.includes("salad") },
  { title: "Les plats complets", predicate: ({ content }) => JSON.parse(content).courses.includes("main_course") },
  { title: "Les accompagnements", predicate: ({ content }) => JSON.parse(content).courses.includes("side") },
  { title: "Les desserts", predicate: ({ content }) => JSON.parse(content).courses.includes("dessert") },
  { title: "Toutes les recettes" }
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
