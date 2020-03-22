import { Auth } from "aws-amplify";
import approve from "approvejs";

import { userHasAuthenticated, userIsEditor, LOGIN } from "../../modules/Navigation";

export const SET_VALUE = "SIGN_UP/SET_VALUE";
export const SET_VALID = "SIGN_UP/SET_VALID"; 
export const TOGGLE_HOVER = "SIGN_UP/TOGGLE_HOVER";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_UP/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_UP/SET_IS_LOADING";
export const SET_NEW_USER = "SIGN_UP/SET_NEW_USER";
export const CLEAR = "SIGN_UP/CLEAR";

const set = (field, value) => ({ type: SET_VALUE, payload: { field, value } });
const setValid = (field, isValid) => ({ type: SET_VALID, payload: { field, isValid } });
const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
const newUser = (newUser) => ({ type: SET_NEW_USER, payload: newUser });

export const clear = () => ({ type: CLEAR });
export const toggleHover = (field) => ({ type: TOGGLE_HOVER, payload: { field } });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });

export const setValue = (field, value) => {
	return (dispatch) => {
		dispatch(set(field, value));
		dispatch(setValid(field, undefined));
	};
};

export const setValidValue = (field, value) => {
	return (dispatch) => {
			dispatch(setValue(field, value));
			dispatch(setValid(field, true));
	};
};

export const validate = (field, value, rules) => {
	return (dispatch) => {
			const { approved } = approve.value(value, rules);
			dispatch(setValid(field, approved));
	};
};

export const signUp = (firstname, lastname, mail, password, gender) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
	
		const fields = [ 
			{ name: "firstname", field: firstname }, 
			{ name: "lastname", field: lastname}, 
			{ name: "mail", field: mail}, 
			{ name: "password", field: password}, 
			{ name: "gender", field: gender} 
		];
		const invalidFields = fields.filter(({ field }) => !field.isValid);

		if (invalidFields.length > 0) {
			invalidFields.forEach(({ name }) => dispatch(setValid(name, false)));
			dispatch(setIsLoading(false));
			return;
		}

		try {
			const attributes = { name: firstname.value, family_name: lastname.value, gender: gender.value };
			const user = await Auth.signUp({ username: mail.value, password: password.value, attributes });
			dispatch(newUser(user));
		} catch(err) {
			alert(err.message);
		}
		
    dispatch(setIsLoading(false));
	};
};

export const confirm = (mail, password, confirmationCode, history) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));

		if (!confirmationCode.isValid) {
			dispatch(setValid("confirmationCode", false));
			dispatch(setIsLoading(false));
			return;
		}

		try {
			await Auth.confirmSignUp(mail, confirmationCode.value);
			await dispatch(signIn(mail, password, history));
			dispatch(clear());
		} catch(err) {
			alert(err.message);
			dispatch(setValue("confirmationCode", ""));
		}
		
    dispatch(setIsLoading(false));
	};
};

export const initConfirm = (mail, password) => {
	return (dispatch) => {
		dispatch(setValue("mail", mail));
		dispatch(setValue("password", password));
		dispatch(newUser({ mail, password }));
		dispatch(setValue("confirmationCode", ""));
		dispatch(setValid("confirmationCode", undefined));
	};
};

const signIn = (mail, password, history) => {
	return async (dispatch) => {
		try {
			const user = await Auth.signIn(mail, password);
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
