import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { navigation } from "../modules/Navigation";
import { signUp } from "../modules/SignUp";
import { signIn } from "../modules/SignIn";
import { resetPassword } from "../modules/ResetPassword";
import { recipeBrowser } from "../modules/RecipeBrowser";
import { recipeEditor } from "../modules/RecipeEditor";
import { recipeView } from "../modules/RecipeView";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    navigation,
    signUp,
    signIn,
    resetPassword,
    recipeBrowser,
    recipeEditor,
    recipeView,
  }), 
  composeEnhancers(applyMiddleware(thunk))
);