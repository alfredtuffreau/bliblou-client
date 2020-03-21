import { s3Upload, createRecipe } from "../../libs/awsLibs";
import approve from "approvejs";

import { MAX_ATTACHMENT_SIZE } from "../../configs";
import { RECIPE } from "../../modules/Navigation";

export const SET_PICTURE = "RECIPE/SET_PICTURE";
export const SET_VALUE = "RECIPE/SET_VALUE";
export const SET_VALID = "RECIPE/SET_VALID"; 
export const TOGGLE_HOVER = "RECIPE/TOGGLE_HOVER";
export const SET_IS_LOADING = "RECIPE/SET_IS_LOADING";
export const CLEAR = "RECIPE/CLEAR";

const setValid = (field, isValid) => ({ type: SET_VALID, payload: { field, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });

export const setValue = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
export const toggleHover = (field) => ({ type: TOGGLE_HOVER, payload: { field } });
export const clear = () => ({ type: CLEAR });

export const setPicture = (url, name, type, lastModified) => ({ 
  type: SET_PICTURE, 
  payload: { url, name, type, lastModified } 
});

export const validate = (field, value, rules) => {
	return (dispatch) => {
			const { approved } = approve.value(value, rules);
			dispatch(setValid(field, approved));
	};
};

export const save = ({ value }, file, history) => {
  return async (dispatch) => {
    if (file && file.size > MAX_ATTACHMENT_SIZE) {
      alert(`Choisissez un fichier plus petit que ${MAX_ATTACHMENT_SIZE / 1000000} MB.`);
      return;
    }

    dispatch(setIsLoading(true));
    try {
      const picture = file ? await s3Upload(file) : null
      const { recipeId } = await createRecipe({ content: value, picture });
      dispatch(clear());
      const path = RECIPE.replace(":recipeId", recipeId);
      history.push(path);
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
  };
};