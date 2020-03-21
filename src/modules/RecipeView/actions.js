import { s3Download, s3Delete, fetchRecipe, deleteRecipe } from "../../libs/awsLibs";

import { HOME, EDIT_RECIPE } from "../../modules/Navigation";

export const SET_IS_LOADING = "RECIPE_VIEW/SET_IS_LOADING";
export const SET_CONTENT = "RECIPE_VIEW/SET_CONTENT";
export const SET_PICTURE = "RECIPE_VIEW/SET_PICTURE";
export const SET_SRC = "RECIPE_VIEW/SET_SRC";
export const CLEAR = "RECIPE_VIEW/CLEAR";

const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const setContent = (value) => ({ type: SET_CONTENT, payload: value });
const setPicture = (value) => ({ type: SET_PICTURE, payload: value });
const setSrc = (value) => ({ type: SET_SRC, payload: value });

export const clear = () => ({ type: CLEAR });

export const loadRecipe = (id) => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { content, picture }  = await fetchRecipe(id);
      const src = picture
        ? await s3Download(picture)
        : null;
      dispatch(setContent(JSON.parse(content)));
      dispatch(setPicture(picture));
      dispatch(setSrc(src));
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
	};
};

export const removeRecipe = (id, picture, history) => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      await deleteRecipe(id);
      if (picture) await s3Delete(picture);
      dispatch(clear());
			history.push(HOME);
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
	};
};

export const goToEdit = (id, history) => {
	return async () => {
    const path = EDIT_RECIPE.replace(":recipeId", id);
    history.push(path);
  }
};