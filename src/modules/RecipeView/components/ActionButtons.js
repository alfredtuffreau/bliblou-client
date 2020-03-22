import React from "react";
import { bool, func } from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTrash, FaPen } from 'react-icons/fa';

import "./ActionButtons.css";

const ActionButtons = ({ isEditor, onDelete, onEdit }) => !isEditor
  ? <></>
  : (
    <div className="action-buttons">
      <ButtonGroup className="pull-right" aria-label="Administration actions">
        <Button variant="danger" onClick={ onDelete }>
          <IconContext.Provider value={{ color: "white", size: `1.25em` }}>
            <FaTrash style={{ marginBottom: "0.2em", marginRight: "12px" }} />
          </IconContext.Provider>
          Supprimer 
        </Button>
        <Button variant="success" onClick={ onEdit }> 
          <IconContext.Provider value={{ color: "white", size: `1.25em` }}>
            <FaPen style={{ marginBottom: "0.2em", marginRight: "12px" }} />
          </IconContext.Provider>
          Modifier
        </Button>
      </ButtonGroup>
    </div>
  );

ActionButtons.propTypes = {
  isEditor: bool,
  onDelete: func.isRequired,
  onEdit: func.isRequired
};

ActionButtons.defaultProps = {
  isEditor: undefined
};

export default ActionButtons;