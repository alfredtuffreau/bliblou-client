import React, { Component } from "react";
import { array, func } from "prop-types"
import BuildingContent from "../../../components/presentation/BuildingContent";

class Recipes extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { catalog } = this.props;

    return catalog 
      ? catalog.map(({ content, createdAt, picture }) => {
          const { title } = JSON.parse(content);
          return (
            <ul>
              <li>{ title } - { createdAt } - { picture }</li>
            </ul>
          );
        })
      : <BuildingContent title="Catalogue de recettes" descr="Contenu en cours de préparation" />;
  }
};

Recipes.propTypes = {
  catalog: array,
  onLoad: func.isRequired,
};

Recipes.defaultProps = {
  catalog: [],
};

export default Recipes;
