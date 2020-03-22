import React from "react";
import { number } from "prop-types";
import { IconContext } from "react-icons";
import { FaRegClock, FaUsers } from 'react-icons/fa';

import "./InfoTable.css";

const InfoTable = ({ before, preparation, cookingAfterPreparation, after, nbOfPeople }) => (
  <table className="info-table">
    <tbody>
      <tr>
        <td>
          <IconContext.Provider value={{ color: "#4CAE51", size: `1.25em` }}>
            <FaRegClock style={{ marginBottom: "0.2em" }} />
            { ` ${before + preparation + cookingAfterPreparation + after } minutes` }
          </IconContext.Provider>
        </td>
        <td>
          <IconContext.Provider value={{ color: "#4CAE51", size: `1.25em` }}>
            <FaUsers style={{ marginBottom: "0.2em" }} />
            { ` ${nbOfPeople } pers.` }
          </IconContext.Provider>
        </td>
      </tr>
    </tbody>
  </table>
);

InfoTable.propTypes = {
  before: number,
  preparation: number,
  cookingAfterPreparation: number,
  after: number,
  nbOfPeople: number
};

InfoTable.defaultProps = {
  before: 0,
  preparation: 0,
  cookingAfterPreparation: 0,
  after: 0,
  nbOfPeople: 0
};

export default InfoTable;