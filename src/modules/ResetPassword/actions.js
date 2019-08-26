import { Auth } from "aws-amplify";
import approve from "approvejs";

import { userHasAuthenticated, HOME, LOGIN } from "../../modules/Navigation";

export const SET_VALUE = "RESET/SET_VALUE";
export const SET_VALID = "RESET/SET_VALID"; 
export const TOGGLE_HOVER = "RESET/TOGGLE_HOVER";
export const TOGGLE_PASSWORD_VISIBILITY = "RESET/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "RESET/SET_IS_LOADING";
export const SET_IS_SENT = "RESET/SET_IS_SENT";
export const SET_NEED_CONFIRM_SIGN_UP = "RESET/SET_NEED_CONFIRM_SIGN_UP"
export const CLEAR = "RESET/CLEAR";

const set = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
const setValid = (field, isValid) => ({ type: SET_VALID, payload: { field, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const setIsSent = (value) => ({ type: SET_IS_SENT, payload: value });
const setNeedConfirmSignUp = (value) => ({ type: SET_NEED_CONFIRM_SIGN_UP, payload: value });

export const clear = () => ({ type: CLEAR }); 
export const toggleHover = (field) => ({ type: TOGGLE_HOVER, payload: { field } });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const setValue = (field, value) => {
	return (dispatch) => {
		dispatch(set(field, value));
		dispatch(setValid(field, undefined));
	};
};

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
	
		if (!mail.isValid) {
			dispatch(setValid("mail", false));
			dispatch(setIsLoading(false));
			return;
		}
	
		try {
			await Auth.forgotPassword(mail.value);
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
	
		dispatch(setIsLoading(false));
	};
};

export const validateSignUp = (mail, signUpCode) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));

		if (!signUpCode.isValid) {
			dispatch(setValid("signUpCode", false));
			dispatch(setIsLoading(false));
			return;
		}

		try {
			await Auth.confirmSignUp(mail.value, signUpCode.value);
			await dispatch(resumeReset(mail));
			dispatch(setNeedConfirmSignUp(false));
		} catch({ message }) {
			alert(message);
			dispatch(setValue("signUpCode", ""));
		}
		
    dispatch(setIsLoading(false));
	};
};

const resumeReset = (mail) => {
	return async (dispatch) => {
		try {
			await Auth.forgotPassword(mail.value);
			dispatch(setIsSent(true));
		} catch ({ code, message }) {
			alert(message);
		}
	};
}

export const validateReset = (mail, password, confirmationCode, history) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
	
		const fields = [ 
			{ name: "password", field: password}, 
			{ name: "confirmationCode", field: confirmationCode}
		];
		const invalidFields = fields.filter(({ field }) => !field.isValid);

		if (invalidFields.length > 0) {
			invalidFields.forEach(({ name }) => dispatch(setValid(name, false)));
			dispatch(setIsLoading(false));
			return;
		}

		try {
			await Auth.forgotPasswordSubmit(mail.value, confirmationCode.value, password.value);
			await dispatch(signIn(mail.value, password.value, history));
			dispatch(clear());
		} catch({ message }) {
			alert(message);
			dispatch(setValue("confirmationCode", ""));
		}
		
    dispatch(setIsLoading(false));
	};
};

const signIn = (mail, password, history) => {
	return async (dispatch) => {
		try {
			await Auth.signIn(mail, password);
			dispatch(userHasAuthenticated(true));
			history.push(HOME);
		} catch({ message }) {
			alert(message);
			history.push(LOGIN);
		}
	};
};
