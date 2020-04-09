import React, { useEffect } from "react";
import { array } from "prop-types";

import RecipesList from "../modules/RecipeBrowser";
import withScrollTop from "../components/view/withScrollTop";
import { loadCatalog } from "../modules/RecipeBrowser";
import { store } from "../store";

const NEW = "new", 
      READY = "ready",
      REVIEWED = "reviewed",
      VALIDATED = "validated", 
      PUBLISHED = "published",
      ALL_STATUS = [ NEW, READY, REVIEWED, VALIDATED, PUBLISHED ];

const NEW_LIST = { title: "Les recettes récemment ajoutées", canAdd: true, predicate: ({ content }) => content.status === NEW };
const READY_LIST = { title: "Les recettes à valider", predicate: ({ content }) => content.status === READY };
const REVIEWED_LIST = { title: "Les recettes revues à corriger", predicate: ({ content }) => content.status === REVIEWED };
const VALIDATED_LIST = { title: "Les recettes à revoir", predicate: ({ content }) => content.status === VALIDATED };
const UNKNOWN_LIST = { title: "Statut non définie", predicate: ({ content }) => !ALL_STATUS.includes(content.status) };
const DEFAULT_LISTS = [
  { title: "Les entrées", predicate: ({ content: { courses, status } }) => status === PUBLISHED && courses.includes("entree") }, 
  { title: "Les salades", predicate: ({ content: { courses, status } }) => status === PUBLISHED && courses.includes("salad") }, 
  { title: "Les plats complets", predicate: ({ content: { courses, status } }) => status === PUBLISHED && courses.includes("main_course") },
  { title: "Les accompagnements", predicate: ({ content: { courses, status } }) => status === PUBLISHED && courses.includes("side") },
  { title: "Les desserts", predicate: ({ content: { courses, status } }) => status === PUBLISHED && courses.includes("dessert") },
  { title: "Toutes les recettes", predicate: ({ content: { status } }) => status === PUBLISHED }
];

const view = ({ groups }) => {
  useEffect(() => { store.dispatch(loadCatalog()) }, []);
  
  const lists = [ ...DEFAULT_LISTS ];
  if (groups) {
    if (groups.includes("publishers")) lists.unshift(VALIDATED_LIST);
    if (groups.includes("reviewers")) lists.unshift(UNKNOWN_LIST, READY_LIST);
    if (groups.includes("chefs")) lists.unshift(REVIEWED_LIST, NEW_LIST);
  }

  return (
    <div id="recipes" className="panel">
      { lists.map(({ title, canAdd, predicate }) => (
        <RecipesList key = { title.split(' ').map(s => s.toLowerCase()).join("-") } 
                     title={ title } 
                     canAdd={ canAdd }
                     predicate={ predicate } />
      ))}
    </div>
  );
};

view.propTypes = {
  groups: array
};

view.defaultProps = {
  groups: undefined
}

export default withScrollTop(view);
