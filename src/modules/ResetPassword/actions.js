import { Auth } from "aws-amplify";
import approve from "approvejs";

export const SET_VALUE = "RESET/SET_VALUE";
export const SET_VALID = "RESET/SET_VALID"; 
export const TOGGLE_HOVER = "RESET/TOGGLE_HOVER";
export const SET_IS_LOADING = "RESET/SET_IS_LOADING";
export const SET_IS_SENT = "RESET/SET_IS_SENT";
export const CLEAR = "RESET/CLEAR";

const setValid = (field, isValid) => ({ type: SET_VALID, payload: { field, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const setIsSent = (value) => ({ type: SET_IS_SENT, payload: value });
const clear = () => ({ type: CLEAR });

export const setValue = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
export const toggleHover = (field) => ({ type: TOGGLE_HOVER, payload: { field } });

export const validate = (field, value, rules) => {
	return (dispatch) => {
		const { approved } = approve.value(value, rules);
		dispatch(setValid(field, approved));
	};
};

export const cancel = (redirect) => {
	return (dispatch) => {
		redirect();
		dispatch(clear());
	};
};

export const startReset = (mail) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
	
		try {
			await Auth.forgotPassword(mail);
			dispatch(setIsSent(true));
		} catch (err) {
			alert(err.message);
		}
	
		dispatch(setIsLoading(false));
	};
};
