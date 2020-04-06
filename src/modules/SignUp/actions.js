import { Auth } from "aws-amplify";
import approve from "approvejs";

import { userHasAuthenticated, userIsEditor, LOGIN } from "../../modules/Navigation";

export const SET_VALUE = "SIGN_UP/SET_VALUE";
export const SET_VALID = "SIGN_UP/SET_VALID"; 
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_UP/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_UP/SET_IS_LOADING";
export const SET_NEW_USER = "SIGN_UP/SET_NEW_USER";
export const CLEAR = "SIGN_UP/CLEAR";

const set = (id, value) => ({ type: SET_VALUE, payload: { id, value } });
const setValid = (id, isValid) => ({ type: SET_VALID, payload: { id, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const newUser = (newUser) => ({ type: SET_NEW_USER, payload: newUser });

export const clear = () => ({ type: CLEAR });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const setValue = (id, value) => {
	return (dispatch) => {
		dispatch(set(id, value));
		dispatch(setValid(id, undefined));
	};
};

export const setValidValue = (id, value) => {
	return (dispatch) => {
			dispatch(setValue(id, value));
			dispatch(setValid(id, true));
	};
};

export const validate = (id, value, rules) => {
	return (dispatch) => {
			const { approved } = approve.value(value, rules);
			dispatch(setValid(id, approved));
	};
};

export const signUp = (firstname, lastname, mail, password, gender) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		const invalidFields = [ firstname, lastname, mail, password, gender ].filter(({ isValid }) => !isValid);
		if (invalidFields.length === 0) {
			try {
				const attributes = { 
					name: firstname.value.trim(), 
					family_name: lastname.value.trim(), 
					gender: gender.value.trim() 
				};
				const user = await Auth.signUp({ 
					username: mail.value.toLowerCase(), 
					password: password.value, attributes 
				});
				dispatch(newUser({ 
					...user, 
					mail: mail.value.toLowerCase(), 
					password: password.value
				}));
			} catch(err) {
				alert(err.message);
			}
		} else {
			invalidFields.forEach(({ id }) => dispatch(setValid(id, false)));
		}
    dispatch(setIsLoading(false));
	};
};

export const confirm = (mail, password, { id, isValid, value : code }, history) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		if (isValid) {
			try {
				await Auth.confirmSignUp(mail.toLowerCase(), code);
				await dispatch(signIn(mail, password, history));
				dispatch(clear());
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

export const initConfirm = (mail, password) => {
	return (dispatch) => {
		dispatch(newUser({ mail, password }));
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
		} catch(err) {
			alert(err.message);
			history.push(LOGIN);
		}
	};
};
