import React from "react";
import { array } from "prop-types";

const Steps = ({ steps }) => {
  return ! steps || steps.length === 0 
  ? <></>
  : (
    <>
        <h2>Préparation</h2>
        { steps.map((step, index) => (
          <p key={ `step-${index}` }>
            <span className="pink">{ index }</span> - { step }
          </p>
        )) } 
    </> 
  );
};

Steps.propTypes = {
  steps: array
};

Steps.defaultProps = {
  steps: undefined
};

export default Steps;