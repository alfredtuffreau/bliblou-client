import React from "react";
import { bool, func } from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTrash, FaPen } from 'react-icons/fa';

const ActionButtons = ({ isEditor, onDelete, onEdit }) => !isEditor
  ? <></>
  : ( <ButtonGroup /* className="action-buttons" */ aria-label="Administration actions">
        <Button variant="danger" onClick={ onDelete }>
          <IconContext.Provider value={{ className: "icon" }}>
            <FaTrash />
          </IconContext.Provider>
          Supprimer 
        </Button>
        <Button variant="success" onClick={ onEdit }> 
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