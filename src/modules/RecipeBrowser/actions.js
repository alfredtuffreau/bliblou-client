import { fetchRecipes, s3Download } from "../../libs/awsLibs";

export const LOAD_RECIPES = "RECIPE_BROWSER/LOAD_RECIPES";
export const SET_CATALOG = "RECIPE_BROWSER/SET_CATALOG";
export const SET_IS_LOADING = "RECIPE_BROWSER/SET_IS_LOADING";
export const SET_INFO_INDEX = "RECIPE_BROWSER/SET_INFO_INDEX";

const setCatalog = (value) => ({ type: SET_CATALOG, payload: value });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });

export const onInfoClick = (listIndex, cardIndex) => ({ type: SET_INFO_INDEX, payload: { listIndex, cardIndex } });

export const loadCatalog = () => {
	return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const recipes = (await fetchRecipes()).map(async ({ picture, content, ...rest }) => {
        const recipe = { content: JSON.parse(content), ...rest };
        if (picture) recipe.src = await s3Download(picture);
        return recipe;
      });
      Promise.all(recipes).then(catalog => dispatch(setCatalog(catalog)));
    } catch ({ message }) {
      alert(message);
    }
    dispatch(setIsLoading(false));
	};
};
