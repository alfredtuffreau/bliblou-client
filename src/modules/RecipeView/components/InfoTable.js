import React from "react";
import { number } from "prop-types";
import { IconContext } from "react-icons";
import { FaRegClock, FaUsers } from 'react-icons/fa';

const InfoTable = ({ before, preparation, cookingAfterPreparation, after, nbOfPeople }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaRegClock />
            { ` ${before + preparation + cookingAfterPreparation + after } minutes` }
          </IconContext.Provider>
        </td>
        <td>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaUsers />
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