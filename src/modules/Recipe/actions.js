import { s3Upload, createRecipe } from "../../libs/awsLibs";
import approve from "approvejs";

import { MAX_ATTACHMENT_SIZE } from "../../configs";

export const SET_PICTURE = "RECIPE/SET_PICTURE";
export const SET_VALUE = "RECIPE/SET_VALUE";
export const SET_VALID = "RECIPE/SET_VALID"; 
export const TOGGLE_HOVER = "RECIPE/TOGGLE_HOVER";
export const SET_IS_LOADING = "RECIPE/SET_IS_LOADING";

const setValid = (field, isValid) => ({ type: SET_VALID, payload: { field, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });

export const setPicture = (url, name, type, lastModified) => ({ 
  type: SET_PICTURE, 
  payload: { url, name, type, lastModified } 
});

export const setValue = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
export const toggleHover = (field) => ({ type: TOGGLE_HOVER, payload: { field } });

export const validate = (field, value, rules) => {
	return (dispatch) => {
			const { approved } = approve.value(value, rules);
			dispatch(setValid(field, approved));
	};
};

export const save = ({ value }, file) => {
  return async (dispatch) => {
    if (file && file.size > MAX_ATTACHMENT_SIZE) {
      alert(`Choisissez un fichier plus petit que ${MAX_ATTACHMENT_SIZE / 1000000} MB.`);
      return;
    }

    dispatch(setIsLoading(true));
    try {
      const picture = file ? await s3Upload(file) : null
      await createRecipe({ content: value, picture });
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
  };
};