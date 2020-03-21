import { fetchRecipes, s3Download } from "../../libs/awsLibs";

import { RECIPE } from "../Navigation/components/Routes";

export const LOAD_RECIPES = "RECIPE_BROWSER/LOAD_RECIPES";
export const SET_CATALOG = "RECIPE_BROWSER/SET_CATALOG";
export const SET_IS_LOADING = "RECIPE_BROWSER/SET_IS_LOADING";

const setCatalog = (value) => ({ type: SET_CATALOG, payload: value });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value }); 

export const loadCatalog = () => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const recipes = (await fetchRecipes()).map(async ({ picture, ...rest }) => {
        if (!picture) return { ...rest };
        const src = await s3Download(picture);
        return ({ ...rest, src });
      });
      Promise.all(recipes).then(catalog => dispatch(setCatalog(catalog)));
    } catch (e) {
      alert(e);
    }
    dispatch(setIsLoading(false));
	};
};

export const openRecipe = (recipeId, history) => {
	return async () => {
    const path = RECIPE.replace(":recipeId", recipeId || "new");
    history.push(path);
	};
};
