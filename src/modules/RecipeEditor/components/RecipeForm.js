import React from "react";
import { object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import TextareaInput from "../../../components/form/TextareaInput";
import withValidationTooltip from "../../../components/form/ValidationTooltip";

const CONTENT_ALERT_MESSAGE = "Le format JSON est invalide.";
const TextareaInputWithTooltip = withValidationTooltip(TextareaInput, CONTENT_ALERT_MESSAGE);
// const CONFIRM_SUBMIT = "Si vous validez la version précédente de la reccete sera supprimée. Voulez-vous continuer ?";
// const CONFIRM_CANCEL = "Si vous annulez les modifications vont être perdues. Voulez-vous continuer ?";
const RECIPE_TEMPLATE = `{
  "title": "",
  "description": "",
  "durations": {
    "preparation": 0,
    "cookingAfterPreparation": 0,
    "resting": {
      "before": 0,
      "after": 0
    }
  },
  "nbOfPeople": 0,
  "ingredients": [],
  "steps": [],
  "suggestions": []
}`;

const RecipeForm = ({ 
  id, content, picture, currentPicture, isLoading, onChange, onBlur, onHover, onSubmit, onCancel, history 
}) => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { url, name, type, lastModified } = picture || {};
    
    // if (!id || window.confirm(CONFIRM_SUBMIT)) {
      const value = content.value || RECIPE_TEMPLATE;
      const file = picture && picture.name && picture.type
        ? await fetch(url).then(response => response.blob())
                          .then(blobFile => new File([ blobFile ], name, { type, lastModified }))
        : null;
      
      onSubmit(id, value, file, currentPicture, history);
    // }
  };

  const validToSubmit = () => {
    const invalidFields = [ content ].filter(({ isValid }) => isValid === false);
    return invalidFields.length === 0;
  };

  const handleOnCancel = () => {
    // if (window.confirm(CONFIRM_CANCEL))
      onCancel(history);
  };

  return ( 
    <Form className="recipe-form" onSubmit={ handleOnSubmit }>
      <TextareaInputWithTooltip controlId="content" 
                                content={ content }
                                defaultValue={ RECIPE_TEMPLATE }
                                showTooltip={ content.showTooltip }
                                onChange={ onChange }
                                onBlur={ onBlur }
                                onHover={ onHover } />
      <div className="form-buttons">
        <Button variant="link"
                onClick={ handleOnCancel }>
          Annuler
        </Button>
        <Button variant="success"
                type="submit"
                size="lg"
                disabled={ !validToSubmit() || isLoading }>
          { !isLoading ? "Enregistrer >" : "Enregistrement..." }
        </Button>
      </div>
    </Form>
  );
};

RecipeForm.propTypes = {
  id: string,
  picture: object,
  currentPicture: string,
  content: shape({ value: string, isValid: bool }),
	isLoading: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

RecipeForm.defaultProps = {
  id: undefined,
  picture: undefined,
  currentPicture: undefined,
  content: { value: undefined, isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(RecipeForm);