import React from "react";
import { array } from "prop-types";

const Steps = ({ steps }) => {
  return ! steps || steps.length === 0 
  ? <></>
  : (
    <>
        <h2>Préparation</h2>
        <ol>
          { steps.map((step, index) => (
            <li key={index}><span>{ step }</span></li>
          )) } 
        </ol>
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