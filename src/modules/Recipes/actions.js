import { getRecipes } from "../../libs/awsLibs";

export const LOAD_RECIPES = "RECIPES/LOAD_RECIPES";
export const SET_CATALOG = "RECIPES/SET_CATALOG";
export const SET_IS_LOADING = "RECIPES/SET_IS_LOADING";

const setCatalog = (value) => ({ type: SET_CATALOG, payload: value });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });

export const loadRecipes = () => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const recipes = await getRecipes();
      dispatch(setCatalog(recipes))
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
	};
};