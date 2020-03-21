import React from "react";
import { string, func } from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTrash, FaPen } from 'react-icons/fa';

const ActionButtons = ({ className, onDelete }) => (
  <ButtonGroup className={ `${className} margin-bottom-8 pull-right padding-sides-16` } 
               aria-label="Administration actions">
    <Button variant="danger" onClick={ onDelete }>
      <IconContext.Provider value={{ color: "white", size: `1.25em` }}>
        <FaTrash style={{ marginBottom: "0.2em", marginRight: "12px" }} />
      </IconContext.Provider>
      Supprimer 
    </Button>
    <Button variant="success"> {/* onClick={ this.handleOnEditClick }> */}
      <IconContext.Provider value={{ color: "white", size: `1.25em` }}>
        <FaPen style={{ marginBottom: "0.2em", marginRight: "12px" }} />
      </IconContext.Provider>
      Modifier
    </Button>
  </ButtonGroup>
);

ActionButtons.propTypes = {
  className: string,
  onDelete: func.isRequired
}

ActionButtons.propTypes = {
  className: ""
}

export default ActionButtons;