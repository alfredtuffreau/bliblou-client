import { fetchRecipes, s3Download } from "../../libs/awsLibs";

export const LOAD_RECIPES = "RECIPE_BROWSER/LOAD_RECIPES";
export const SET_CATALOG = "RECIPE_BROWSER/SET_CATALOG";
export const SET_IS_LOADING = "RECIPE_BROWSER/SET_IS_LOADING";

const setCatalog = (value) => ({ type: SET_CATALOG, payload: value });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value }); 

export const loadCatalog = () => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const recipes = (await fetchRecipes()).map(async ({ content, ...rest }) => ({ 
        content: JSON.parse(content), 
        ...rest 
      }));
      Promise.all(recipes).then(catalog => dispatch(setCatalog(catalog)));
    } catch ({ message }) {
      alert(message);
    }
    dispatch(setIsLoading(false));
	};
};

export const loadPicture = (picture) => {
	return async () => {
    try {
      return s3Download(picture);
    } catch ({ message }) {
      alert(message);
    }
  };
};
