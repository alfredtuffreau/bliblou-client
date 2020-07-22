import React, { useEffect, useRef } from "react";
import { array, arrayOf, shape, string, bool, func } from "prop-types";

import RecipesList from "./RecipesList";

const recipeBrowser = ({ lists, catalog, scrollsLeft, loadCatalog, loadPicture, setScrollsLeft }) => {
  const browser = useRef(null);
  
  useEffect(() => { 
    loadCatalog();
    if (scrollsLeft) {
      Array.from(browser.current.children)
           .filter(el => el.className === "card-list")
           .forEach((cardList, index) => cardList.children.item(0).scrollLeft = scrollsLeft[index]);
    }
  }, []);
  
  const handleOpenRecipe = () => {
    const scrollsLeft = Array.from(browser.current.children)
                             .filter(el => el.className === "card-list")
                             .map(cardList => cardList.children.item(0).scrollLeft);
    setScrollsLeft(scrollsLeft);
  }
  
  return (
    <div ref={ browser }>
      { lists.map(({ title, canAdd, predicate }) => (
        <RecipesList key = { title.split(' ').map(s => s.toLowerCase()).join("-") } 
                     title={ title } 
                     canAdd={ canAdd }
                     catalog={ catalog }
                     predicate={ predicate }
                     loadPicture={ loadPicture }
                     openRecipe={ handleOpenRecipe } />
      )) }
    </div>
  );
}

recipeBrowser.propTypes = {
  lists: arrayOf(shape({
    title: string.isRequired,
    canAdd: bool,
    predicate: func.isRequired
  })),
  catalog: array,
  loadCatalog: func.isRequired,
  loadPicture: func.isRequired
};

recipeBrowser.defaultProps = {
  lists: [],
  catalog: []
}

export default recipeBrowser;