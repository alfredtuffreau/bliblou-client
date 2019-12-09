import { Auth } from "aws-amplify";

export const SET_WITH_BACKGROUND = "APP/SET_WITH_BACKGROUND";
export const USER_HAS_AUTHENTICATED = "APP/HAS_AUTHENTICATED";

export const setWithBackground = (value) => ({ type: SET_WITH_BACKGROUND, payload: value });
export const userHasAuthenticated = (value) => ({ type: USER_HAS_AUTHENTICATED, payload: value });

export const loadUser = () => {
	return async (dispatch) => {
		try {
			await Auth.currentSession();
			dispatch(userHasAuthenticated(true));
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
			onLogout();
		} catch(err) {
			alert(err.message);
		}
	};
};