import React from "react";
import { number, shape } from "prop-types";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaUsers } from 'react-icons/fa';
import { GiBackwardTime } from "react-icons/gi";

import Durations from "./Durations";

const formatDuration = seconds => {
  const days = Math.floor(seconds / (3600*24));
  seconds -= days*3600*24;
  const hrs = Math.floor(seconds / 3600);
  seconds -= hrs*3600;
  const mnts = Math.floor(seconds / 60);
  seconds -= mnts*60;
  return [ { val: days, unit: days === 1 ? "jour" : "jours" },
           { val: hrs, unit: "h" },
           { val: mnts, unit: "min" } ].filter(({ val }) => val)
                                       .map(({ val, unit }) => `${val} ${unit}`)
                                       .join(' ');
};

const RecipeInformations = ({ nbOfPeople, before, preparation, cookingAfterPreparation, resting }) => (
  <>
    { 
      !nbOfPeople
        ? <></>
        : <Container>
            <Row>
              <div className="info-group">
                <IconContext.Provider value={{ className: "green icon icon-sm" }}>
                  <FaUsers />{ ` ${nbOfPeople } pers.` }
                </IconContext.Provider>
              </div>
            </Row>
          </Container>
    }
    { 
      !(before.preparation || before.cookingAfterPreparation || before.resting)
        ? <></>
        : <Container>
            <Row>
              <div className="info-group">
                Préparations à réaliser à l'avance :<br />
                <IconContext.Provider value={{ className: "green icon icon-sm" }}> 
                  <OverlayTrigger placement="auto"
                                  overlay={ <Tooltip id="durations-tooltip">
                                              Détails des étapes à réalisées à l'avance :<br />
                                              <Durations { ...before } />
                                            </Tooltip> 
                                  }>
                    <GiBackwardTime />
                  </OverlayTrigger>
                  { ` ${formatDuration((before.preparation + before.cookingAfterPreparation + before.resting)*60)}` }
                </IconContext.Provider>
              </div>
            </Row>
          </Container>
    }
    <Durations preparation={ preparation } 
               cookingAfterPreparation={ cookingAfterPreparation} 
               resting={ resting } />
  </>
);

RecipeInformations.propTypes = {
  nbOfPeople: number,
  before: shape({ preparation: number, cookingAfterPreparation: number, resting: number }),
  preparation: number,
  cookingAfterPreparation: number,
  resting: number
};

RecipeInformations.defaultProps = {
  nbOfPeople: 0,
  before: {},
  preparation: 0,
  cookingAfterPreparation: 0,
  resting: 0
};

export default RecipeInformations;