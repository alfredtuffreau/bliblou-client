import React from "react";
import { array } from "prop-types";
import { Card } from "react-bootstrap";

import CardList from "../../../components/presentation/CardList";

const Suggestions = ({ suggestions }) => !suggestions || suggestions.length === 0
  ? <></>
  : (
    <CardList title="Suggestions" description="Nos propositions pour accompagner ce plat :">
      { suggestions.map((suggestion, index) => (
        <Card key={ `suggestion-${index}` }
              bg="light"
              text="dark"
              body>
          { suggestion }
        </Card>
      )) }
    </CardList>
  ); 

Suggestions.propTypes = {
  suggestions: array
};

Suggestions.defaultProps = {
  suggestions: []
};

export default Suggestions;