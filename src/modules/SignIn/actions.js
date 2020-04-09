import { Auth } from "aws-amplify";

import { HOME, loggedIn } from "../../modules/Navigation";
import { initConfirm } from "../../modules/SignUp";

export const SET_VALUE = "SIGN_IN/SET_VALUE";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_IN/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_IN/SET_IS_LOADING";
export const CLEAR = "SIGN_IN/CLEAR";

const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const clear = () => ({ type: CLEAR });

export const setValue = (id, value) => ({ type: SET_VALUE, payload: { id, value } });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const signIn = (mail, password, history) => {
  return async (dispatch) => {
		dispatch(setIsLoading(true));
    try { 
      const user = await Auth.signIn(mail.toLowerCase(), password);
			dispatch(loggedIn(user.signInUserSession.idToken.payload["cognito:groups"]));
      dispatch(clear());
    } catch (err) {
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
      await Auth.resendSignUp(mail.toLowerCase());
      dispatch(initConfirm(mail, password));
      dispatch(clear());
      history.push(HOME);
    } catch ({ message }) {
      alert(message);
    }
  };
};

