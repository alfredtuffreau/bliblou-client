import React from "react";

import withScrollTop from "../components/view/withScrollTop";
import { withNavbar, withFooter } from "../modules/Navigation";
import Recipe from "../modules/Recipe";

const view = ({ match: { params: { id } }, location: { search } }) => { 
  const query = new URLSearchParams(search);
  const mode = query.get('mode');

  return (
    <div className="dark-panel">
      <div className="content centered-content large-margin-top large-margin-bottom">
        <Recipe id={ id } readonly={ mode !== "edit" } />
      </div>
    </div>
  );
};

export default [
  withScrollTop,
  withNavbar,
  withFooter,
].reduce((acc, op) => op(acc), view);