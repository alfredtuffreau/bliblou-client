import { createStore, combineReducers } from "redux";

import { default as user } from "../modules/User/reducer";
import { default as signUpForm } from "../modules/SignUp/reducer";
import { default as signInForm } from "../modules/SignIn/reducer";

export const store = createStore(
  combineReducers({
    user,
    signUpForm,
    signInForm,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);