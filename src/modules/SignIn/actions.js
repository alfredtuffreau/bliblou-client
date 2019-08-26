import { Auth } from "aws-amplify";

import { HOME, userHasAuthenticated } from "../../modules/Navigation";
import { initConfirm } from "../../modules/SignUp";

export const SET_VALUE = "SIGN_IN/SET_VALUE";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_IN/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_IN/SET_IS_LOADING";
export const CLEAR = "SIGN_IN/CLEAR";

const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const clear = () => ({ type: CLEAR });

export const setValue = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const signIn = (mail, password, history) => {
  return async (dispatch) => {
		dispatch(setIsLoading(true));

    try { 
      await Auth.signIn(mail, password);
      dispatch(userHasAuthenticated(true));
      dispatch(clear());
      history.push(HOME);
    } catch (err) {
      console.log(err);
      if (err.code === "UserNotConfirmedException") {
        await dispatch(restartConfirm(mail, password, history));
      } else if (err.code === "UserNotFoundException" || err === "Username cannot be empty") {
        alert("Incorrect username or password.");
      } else {
        alert(err.message);
      }
    }

		dispatch(setIsLoading(false));
  };
};

const restartConfirm = (mail, password, history) => {
  return async (dispatch) => {
    try {
      await Auth.resendSignUp(mail);
      dispatch(initConfirm(mail, password));
      dispatch(clear());
      history.push(HOME);
    } catch (err) {
      alert(err.message);
    }
  };
};

