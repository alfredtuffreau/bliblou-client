import React from "react";
import { array } from "prop-types";
import { Card } from "react-bootstrap";

import CardList from "../../../components/presentation/CardList";

const Advices = ({ advices }) => !advices || advices.length === 0
  ? <></>
  : (
    <CardList title="Conseils" description="Nos recommandations pour aller plus loin :">
      { advices.map((advice, index) => (
        <Card key={ `advice-${index}` }
              bg="light"
              text="dark"
              body>
          { advice }
        </Card>
      )) }
    </CardList>
  ); 

Advices.propTypes = {
  advices: array
};

Advices.defaultProps = {
  advices: undefined
};

export default Advices;