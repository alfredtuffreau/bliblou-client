import { Auth } from "aws-amplify";
import approve from "approvejs";

import { userHasAuthenticated, userIsEditor, HOME, LOGIN } from "../../modules/Navigation";

export const SET_VALUE = "RESET/SET_VALUE";
export const SET_VALID = "RESET/SET_VALID"; 
export const TOGGLE_PASSWORD_VISIBILITY = "RESET/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "RESET/SET_IS_LOADING";
export const SET_IS_SENT = "RESET/SET_IS_SENT";
export const SET_NEED_CONFIRM_SIGN_UP = "RESET/SET_NEED_CONFIRM_SIGN_UP"
export const CLEAR = "RESET/CLEAR";

const set = (id, value) => ({ type: SET_VALUE, payload: { id, value } });
const setValid = (id, isValid) => ({ type: SET_VALID, payload: { id, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const setIsSent = (value) => ({ type: SET_IS_SENT, payload: value });
const setNeedConfirmSignUp = (value) => ({ type: SET_NEED_CONFIRM_SIGN_UP, payload: value });

export const clear = () => ({ type: CLEAR });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const setValue = (id, value) => {
	return (dispatch) => {
		dispatch(set(id, value));
		dispatch(setValid(id, undefined));
	};
};

export const validate = (id, value, rules) => {
	return (dispatch) => {
		const { approved } = approve.value(value, rules);
		dispatch(setValid(id, approved));
	};
};

export const cancel = (redirect) => {
	return (dispatch) => {
		redirect();
		dispatch(clear());
	};
};

export const startReset = ({ id, isValid, value: mail }) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		if (isValid) {
			try {
				await Auth.forgotPassword(mail.toLowerCase());
				dispatch(setIsSent(true));
			} catch ({ code, message }) {
				if (code === "InvalidParameterException") {
					dispatch(setNeedConfirmSignUp(true));
				} else if (code === "UserNotFoundException") {
					dispatch(setIsSent(true));
				} else {
					alert(message);
				}
			}
		} else {
			dispatch(setValid(id, false));
		}
		dispatch(setIsLoading(false));
	};
};

export const validateSignUp = (mail, { id, isValid, value: code}) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		if (isValid) {
			try {
				await Auth.confirmSignUp(mail.toLowerCase(), code);
				await dispatch(resumeReset(mail));
				dispatch(setNeedConfirmSignUp(false));
			} catch({ message }) {
				if (message.includes("Member must satisfy regular expression pattern: [\\S]+")) 
					alert("Invalid verification code provided, please try again.");
				else 
					alert(message);
				dispatch(setValue(id, ""));
			}
		} else {
			dispatch(setValid(id, false));
		}
    dispatch(setIsLoading(false));
	};
};

const resumeReset = (mail) => {
	return async (dispatch) => {
		try {
			await Auth.forgotPassword(mail.toLowerCase());
			dispatch(setIsSent(true));
		} catch ({ code, message }) {
			alert(message);
		}
	};
}

export const validateReset = (mail, password, confirmationCode, history) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		const invalidFields = [ password, confirmationCode ].filter(({ isValid }) => !isValid);
		if (invalidFields.length === 0) {
			try {
				await Auth.forgotPasswordSubmit(mail.toLowerCase(), confirmationCode.value, password.value);
				await dispatch(signIn(mail, password.value, history));
				dispatch(clear());
			} catch({ message }) {
				if (message.includes("Member must satisfy regular expression pattern: [\\S]+")) 
					alert("Invalid verification code provided, please try again.");
				else 
					alert(message);
				dispatch(setValue(confirmationCode.id, ""));
			}
		} else {
			invalidFields.forEach(({ id }) => dispatch(setValid(id, false)));
		}
    dispatch(setIsLoading(false));
	};
};

const signIn = (mail, password, history) => {
	return async (dispatch) => {
		try {
			const user = await Auth.signIn(mail.toLowerCase(), password);
			const groups = user.signInUserSession.idToken.payload["cognito:groups"];
			const isEditor = groups ? groups.includes("editors") : false; 
			dispatch(userHasAuthenticated(true));
			dispatch(userIsEditor(isEditor));
			history.push(HOME);
		} catch({ message }) {
			alert(message);
			history.push(LOGIN);
		}
	};
};
