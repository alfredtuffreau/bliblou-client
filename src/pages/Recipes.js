import React from "react";

import BuildingContent from "../components/presentation/BuildingContent";
import withScrollTop from "../components/view/withScrollTop";

const Recipes = () => (
  <div className="dark-panel">
    <div className="content centered-content">
      <BuildingContent />
    </div>
  </div>
);

export default withScrollTop(Recipes);
