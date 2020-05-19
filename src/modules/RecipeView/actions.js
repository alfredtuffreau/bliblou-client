import { s3Download, s3Delete, fetchRecipe, deleteRecipe } from "../../libs/awsLibs";

import { HOME } from "../../modules/Navigation";

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

export const loadRecipe = (id, history) => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { content, picture, thumbnails = [] }  = await fetchRecipe(id);
      dispatch(setContent(JSON.parse(content)));
      dispatch(setPicture(picture));

      if (picture) {
        // We use max between width and height because of rotable devices
        const maxAvailableWidth = Math.max(
          window.screen ? window.screen.availWidth : window.innerWidth,
          window.screen ? window.screen.availHeight : window.innerHeight 
        );
        try {
          const src = await s3Download(
            thumbnails.find(thumbnail => Number(thumbnail.replace(/\..+$/, '')
                                                         .split("_")[1]
                                                         .split("x")
                                                         .every(cur => Number(cur) >= maxAvailableWidth)))
            || picture
          );
          dispatch(setSrc(src));
        } catch (err) {
          // Error loading picture default will be used
        }
      }
    } catch ({ message }) {
      alert(message);
			history.push(HOME);
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