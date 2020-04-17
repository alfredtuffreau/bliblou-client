import React from "react";
import { array, func } from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTrash, FaPen } from 'react-icons/fa';

const ActionButtons = ({ groups, onDelete, onEdit }) => {
  if (!(groups && groups.some(group => [ "chefs", "reviewers", "publishers" ].includes(group)))) 
    return <></>;
  
  return (
    <ButtonGroup aria-label="Administration actions">
      { groups.includes("chefs")
        ? <Button variant="danger" 
                  onClick={ onDelete }
                  onMouseDown={ e => e.preventDefault() }>
            <IconContext.Provider value={{ className: "icon icon-sm" }}>
              <FaTrash />
            </IconContext.Provider>
            Supprimer 
          </Button>
        : <></> }
      { groups.some(group => [ "chefs", "reviewers", "publishers" ].includes(group))
        ? <Button variant="success"
                  onClick={ onEdit }
                  onMouseDown={ e => e.preventDefault() }> 
            <IconContext.Provider value={{ className: "icon icon-sm" }}>
              <FaPen />
            </IconContext.Provider>
            Modifier
          </Button>
        : <></> }
    </ButtonGroup>
  );
};

ActionButtons.propTypes = {
  groups: array,
  onDelete: func.isRequired,
  onEdit: func.isRequired
};

ActionButtons.defaultProps = {
  groups: undefined
};

export default ActionButtons;