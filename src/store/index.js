import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { navigation } from "../modules/Navigation";
import { signUp } from "../modules/SignUp";
import { signIn } from "../modules/SignIn";
import { resetPassword } from "../modules/ResetPassword";
import { recipes } from "../modules/Recipes";
import { recipe } from "../modules/Recipe";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    navigation,
    signUp,
    signIn,
    resetPassword,
    recipes,
    recipe,
  }), 
  composeEnhancers(applyMiddleware(thunk))
);