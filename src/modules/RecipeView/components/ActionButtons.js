import React from "react";
import { bool, func } from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTrash, FaPen } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const ActionButtons = ({ isEditor, onDelete, onEdit }) => !isEditor
  ? <></>
  : ( <ButtonGroup aria-label="Administration actions">
        <Button variant="danger" 
                onClick={ onDelete }>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaTrash />
          </IconContext.Provider>
          Supprimer 
        </Button>
        <Button variant="success"
                onClick={ onEdit }
                onMouseDown={ e => e.preventDefault() }> 
          <IconContext.Provider value={{ className: "icon" }}>
            <FaPen />
          </IconContext.Provider>
          Modifier
        </Button>
      </ButtonGroup> );

ActionButtons.propTypes = {
  isEditor: bool,
  onDelete: func.isRequired,
  onEdit: func.isRequired
};

ActionButtons.defaultProps = {
  isEditor: undefined
};

export default ActionButtons;