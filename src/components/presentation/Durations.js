import React from "react";
import { number } from "prop-types";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IconContext } from "react-icons";
import { GiDoughRoller, GiCookingPot, GiChickenOven } from "react-icons/gi";

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

const Durations = ({ preparation, cookingAfterPreparation, resting }) => {
  if (!preparation && !cookingAfterPreparation && !resting)
    return <></>;
  
  const durations = [ 
    { tooltip: <Tooltip>Préparation</Tooltip>, time: preparation, icon: <GiDoughRoller /> },
    { tooltip: <Tooltip>Cuisson</Tooltip>, time: cookingAfterPreparation, icon: <GiCookingPot /> },
    { tooltip: <Tooltip>Repos</Tooltip>, time: resting, icon: <GiChickenOven /> } 
  ];

  return (
    <Container>
      <Row>
        { 
          durations.filter(({ time }) => time)
                   .map(({ tooltip, time, icon }, index) => (
                     <div className="info-group" key={ index }>
                       <IconContext.Provider value={{ className: "green icon icon-sm" }}> 
                         <OverlayTrigger placement="auto"
                                        overlay={ tooltip }>
                           { icon }
                         </OverlayTrigger>
                         { ` ${formatDuration(time*60)}` }
                       </IconContext.Provider>
                     </div>
                   )) 
        }
      </Row>
    </Container>
  );
};

Durations.propTypes = {
  preparation: number,
  cookingAfterPreparation: number,
  resting: number
};

Durations.defaultProps = {
  preparation: 0,
  cookingAfterPreparation: 0,
  resting: 0
};

export default Durations;