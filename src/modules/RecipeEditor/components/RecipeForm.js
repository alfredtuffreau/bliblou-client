import React from "react";
import { object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import TextareaInput from "../../../components/form/TextareaInput";

const CONFIRM_SUBMIT = "Si vous validez la version précédente de la reccete sera supprimée. Voulez-vous continuer ?";
const CONFIRM_CANCEL = "Si vous annulez les modifications vont être perdues. Voulez-vous continuer ?";
const RECIPE_TEMPLATE = `{
  "title": "",
  "description": "",
  "durations": {
    "before": {
      "preparation": 0,
      "cookingAfterPreparation": 0,
      "resting": 0
    },
    "preparation": 0,
    "cookingAfterPreparation": 0,
    "resting": 0
  },
  "nbOfPeople": 0,
  "courses": [ "appetizer", "entree", "salad", "main_course", "side", "sauce", "dessert"],
  "ingredients": [],
  "steps": [],
  "advices": [],
  "status": "new"
}`;

const RecipeForm = ({ 
  id, 
  content, 
  picture, 
  currentPicture, 
  isLoading, 
  onFieldChange,
  validateField,
  onSubmit, 
  onCancel, 
  history 
}) => {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { url, name, type, lastModified } = picture || {};
    
    if (!id || window.confirm(CONFIRM_SUBMIT)) {
      const value = content.value || RECIPE_TEMPLATE;
      const file = picture && picture.name && picture.type
        ? await fetch(url).then(response => response.blob())
                          .then(blobFile => new File([ blobFile ], name, { type, lastModified }))
        : null;
      
      onSubmit(id, value, file, currentPicture, history);
    }
  };

  const validToSubmit = () => {
    return [ content ].filter(({ isValid }) => isValid === false)
                      .length === 0;
  };

  const handleOnCancel = () => {
    if (window.confirm(CONFIRM_CANCEL))
      onCancel(history);
  };

  return ( 
    <Form onSubmit={ handleOnSubmit }>
      <TextareaInput { ...content }
                     label="Recette" 
                     defaultValue={ RECIPE_TEMPLATE }
                     onChange={ onFieldChange }
                     onBlur={ validateField } />
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
  content: shape({ id: string, value: string, isValid: bool }).isRequired,
  picture: object,
  currentPicture: string,
	isLoading: bool,
	onFieldChange: func.isRequired,
	validateField: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired
};

RecipeForm.defaultProps = {
  id: undefined,
  picture: undefined,
  currentPicture: undefined,
  isLoading : false
};

export default withRouter(RecipeForm);