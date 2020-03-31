import { Auth } from "aws-amplify";

export const SET_FOOTER_HEIGHT = "APP/SET_FOOTER_HEIGHT";
export const USER_HAS_AUTHENTICATED = "APP/HAS_AUTHENTICATED";
export const USER_IS_EDITOR = "APP/USER_IS_EDITOR";

export const setFooterHeight = (value) => ({ type: SET_FOOTER_HEIGHT, payload: value });
export const userHasAuthenticated = (value) => ({ type: USER_HAS_AUTHENTICATED, payload: value });
export const userIsEditor = (value) => ({ type: USER_IS_EDITOR, payload: value });

export const loadUser = () => {
	return async (dispatch) => {
		try {
			const signInUserSession = await Auth.currentSession();
			const groups = signInUserSession.idToken.payload["cognito:groups"];
			const isEditor = groups ? groups.includes("editors") : false; 
			dispatch(userHasAuthenticated(true));
			dispatch(userIsEditor(isEditor));
		} catch(err) { 
			if (err !== 'No current user') alert(err.message);
		}
  };
};

export const logout = (onLogout) => {
	return async (dispatch) => {
		try {
			await Auth.signOut();
		  dispatch(userHasAuthenticated(false));
		  dispatch(userIsEditor(false));
			onLogout();
		} catch(err) {
			alert(err.message);
		}
	};
};