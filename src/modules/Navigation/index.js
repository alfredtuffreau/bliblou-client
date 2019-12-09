export { default as navigation } from "./reducer";
export { userHasAuthenticated } from "./actions";

export { 
  HOME, HOME2, LOGIN, RECIPES, RECIPE, ABOUT_US, CONTACT_US, LOST_PASSWORD,
  UNAUTH, AUTH,
} from "./components/Routes";
export { default as Routes } from "./container";