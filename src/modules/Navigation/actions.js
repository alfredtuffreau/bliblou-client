import { Auth } from "aws-amplify";

import { LOGIN } from "./components/Routes";

export const SET_FOOTER_HEIGHT = "APP/SET_FOOTER_HEIGHT";
export const LOGGED_IN = "APP/LOGGED_IN";
export const LOGGED_OUT = "APP/LOGGED_OUT";

export const setFooterHeight = (value) => ({ type: SET_FOOTER_HEIGHT, payload: value });
export const loggedIn = (groups) => ({ type: LOGGED_IN, payload: groups });
export const loggedOut = () => ({ type: LOGGED_OUT });

export const loadUser = () => {
	return async (dispatch) => {
		try {
			const signInUserSession = await Auth.currentSession();
			dispatch(loggedIn(signInUserSession.idToken.payload["cognito:groups"]));
		} catch(err) { 
			if (err !== 'No current user') alert(err.message);
		}
  };
};

export const logout = (history) => {
	return async (dispatch) => {
		try {
			await Auth.signOut();
		  dispatch(loggedOut());
			history.push(LOGIN)
		} catch(err) {
			alert(err.message);
		}
	};
};