import React from "react";
import { array } from "prop-types";

import RecipeBrowser from "../modules/RecipeBrowser";
import withScrollTop from "../components/view/withScrollTop";

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
const NO_COURSES_LIST = { title: "Catégorie non définie", predicate: ({ content: { courses } }) => !courses || courses === 0 };
const DEFAULT_LISTS = [
  { title: "Pour l’apéritif", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("appetizer") }, 
  { title: "Les entrées", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("entree") }, 
  { title: "Les salades", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("salad") }, 
  { title: "Les plats complets", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("main_course") },
  { title: "Les accompagnements", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("side") },
  { title: "Les sauces", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("sauce") },
  { title: "Pour accompagner vos pâtes", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("pasta_sauce") },
  { title: "Les desserts", predicate: ({ content: { courses = [], status } }) => [ VALIDATED, PUBLISHED ].includes(status) && courses.includes("dessert") },
  { title: "Vite fait", predicate: ({ content: { durations: { before: { preparation: beforePrep, cookingAfterPreparation: beforeCooking, resting: beforeResting }, preparation, cookingAfterPreparation, resting }, status } }) => [ VALIDATED, PUBLISHED ].includes(status) && beforePrep + beforeCooking + beforeResting + preparation + cookingAfterPreparation + resting <= 30 },
  { title: "Toutes les recettes", predicate: ({ content: { status } }) => [ VALIDATED, PUBLISHED ].includes(status) }
];

const recipes = ({ groups }) => {
  const lists = [ ...DEFAULT_LISTS ];
  
  if (groups) {
    if (groups.includes("publishers")) lists.unshift(VALIDATED_LIST);
    if (groups.includes("reviewers")) lists.unshift(UNKNOWN_LIST, NO_COURSES_LIST, READY_LIST);
    if (groups.includes("chefs")) lists.unshift(REVIEWED_LIST, NEW_LIST);
  }

  return (
    <div className="panel recipes">
      <RecipeBrowser lists={ lists } />
    </div>
  );
};

recipes.propTypes = {
  groups: array
};

recipes.defaultProps = {
  groups: undefined
}

export default withScrollTop(recipes);
