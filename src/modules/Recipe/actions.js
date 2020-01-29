import { s3Upload } from "../../libs/awsLibs";

export const SET_PICTURE = "RECIPE/SET_PICTURE";

export const setPicture = (url, name, type, lastModified) => ({ 
  type: SET_PICTURE, 
  payload: { url, name, type, lastModified } 
});

export const save = (file) => {
  return async (dispatch) => {
    // dispatch(setIsLoading(true));

    try {
      await s3Upload(file);
    } catch(err) {
      alert(err.message);
    }
    
    // dispatch(setIsLoading(false));
  };
};