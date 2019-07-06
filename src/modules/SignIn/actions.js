export const SET_MAIL = "SIGN_IN/SET_MAIL";
export const SET_PASSWORD = "SIGN_IN/SET_PASSWORD";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_IN/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_IN/SET_IS_LOADING";
export const CLEAR_FORMS = "SIGN_IN/CLEAR_FORMS";

export const setMail = (value) => ({ type: SET_MAIL, payload: value });
export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });
export const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
export const clearForms = () => ({ type: CLEAR_FORMS });
