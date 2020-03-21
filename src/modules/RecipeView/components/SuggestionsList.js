import React from "react";
import { array } from "prop-types";
import { Card } from "react-bootstrap";

import CardList from "../../../components/presentation/CardList";

const CARDS_HEIGHT = 10;
const CARDS_WIDTH = 18;

const suggestionCardStyle = { 
  width: `${CARDS_WIDTH}rem`, 
  minWidth: `${CARDS_WIDTH}rem`, 
  minHeight: `${CARDS_HEIGHT}rem`
};

const SuggestionsList = ({ suggestions }) => suggestions.length === 0 
  ? <></>
  : (
    <CardList title="Suggestions" description="Nos propositions pour accompagner ce plat :">
      { suggestions.map((suggestion, index) => (
        <Card key={ `suggestion-${index}` }
              style={ suggestionCardStyle }
              className="bg-dark text-white" 
              body>
          { suggestion }
        </Card>
      )) }
    </CardList>
  ); 

SuggestionsList.propTypes = {
  suggestions: array
};

SuggestionsList.defaultProps = {
  suggestions: []
};

export default SuggestionsList;