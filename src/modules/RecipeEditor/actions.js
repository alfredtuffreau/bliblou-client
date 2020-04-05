import { s3Download, s3Upload, s3Delete, fetchRecipe, createRecipe, updateRecipe } from "../../libs/awsLibs";
import approve from "approvejs";

import { MAX_ATTACHMENT_SIZE } from "../../configs";
import { HOME, RECIPE } from "../../modules/Navigation";

export const SET_PICTURE = "RECIPE/SET_PICTURE";
export const SET_CURRENT_PICTURE = "RECIPE/SET_CURRENT_PICTURE";
export const SET_VALUE = "RECIPE/SET_VALUE";
export const SET_VALID = "RECIPE/SET_VALID"; 
export const TOGGLE_HOVER = "RECIPE/TOGGLE_HOVER";
export const SET_IS_LOADING = "RECIPE/SET_IS_LOADING";
export const CLEAR = "RECIPE/CLEAR";


const set = (id, value) => ({ type: SET_VALUE, payload: { id, value } });
const setValid = (id, isValid) => ({ type: SET_VALID, payload: { id, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });

export const setCurrentPicture = (value) => ({ type: SET_CURRENT_PICTURE, payload: value });
export const toggleHover = (id) => ({ type: TOGGLE_HOVER, payload: { id } });
export const clear = () => ({ type: CLEAR });

export const setValue = (id, value) => {
	return (dispatch) => {
		dispatch(set(id, value));
		dispatch(setValid(id, undefined));
	};
};

export const setPicture = (url, name, type, lastModified) => ({ 
  type: SET_PICTURE, 
  payload: { url, name, type, lastModified } 
});

export const loadRecipe = (id, history) => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { content, picture }  = await fetchRecipe(id);
      dispatch(setValue("content", content));
      if (picture) {
        const src = await s3Download(picture);
        dispatch(setPicture(src));
        dispatch(setCurrentPicture(picture));
      }
    } catch (e) {
			history.push(HOME);
    }
    dispatch(setIsLoading(false));
	};
};

export const validate = (id, value, rules) => {
	return (dispatch) => {
			const { approved } = approve.value(value, rules);
			dispatch(setValid(id, approved));
	};
};

const create = async (content, file) => {
  const picture = file ? await s3Upload(file) : null
  const { recipeId } = await createRecipe({ content, picture });
  return RECIPE.replace(":recipeId", recipeId);
};

const update = async (id, content, file, currentPicture) => {
  const changePicture = async (currentPicture, file) => {
    if (currentPicture) await s3Delete(currentPicture);
    return await s3Upload(file);
  };
  
  const picture = file
    ? await changePicture(currentPicture, file)
    : undefined;

  await updateRecipe(id, { content, picture });
  return RECIPE.replace(":recipeId", id);
};

export const save = (id, content, file, currentPicture, history) => {
  return async (dispatch) => {
    if (file && file.size > MAX_ATTACHMENT_SIZE) {
      alert(`Choisissez un fichier plus petit que ${MAX_ATTACHMENT_SIZE / 1000000} MB.`);
      return;
    }

    dispatch(setIsLoading(true));
    try {
      const path = !id
        ? await create(content, file)
        : await update(id, content, file, currentPicture);

      history.push(path);
      dispatch(clear());
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
  };
};

export const back = (history) => {
  return async (dispatch) => {
    dispatch(clear());
    history.goBack()
  };
};