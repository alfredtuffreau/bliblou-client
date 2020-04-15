import React from "react";
import { string, number } from "prop-types";
import { Container, Row } from "react-bootstrap";
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

const Durations = ({ description, preparation, cookingAfterPreparation, resting }) => {
  if (!preparation && !cookingAfterPreparation && !resting)
    return <></>;
  
  const durations = [ 
    { label: "Préparation", time: preparation, icon: <GiDoughRoller /> },
    { label: "Cuisson", time: cookingAfterPreparation, icon: <GiCookingPot /> },
    { label: "Repos", time: resting, icon: <GiChickenOven /> } 
  ];

  return (
    <>
      { description }
      <Container>
        <Row>
          { durations.filter(({ time }) => time)
                     .map(({ label, time, icon }, index) => (
                       <div className="info" key={ index }>
                         <IconContext.Provider value={{ className: "green icon icon-sm" }}> 
                           { icon } { label } : { ` ${formatDuration(time*60)}` }
                         </IconContext.Provider>
                       </div>
                     )) }
        </Row>
      </Container>
    </>
  );
};

Durations.propTypes = {
  decription: string.isRequired,
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