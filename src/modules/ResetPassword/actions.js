export const SET_MAIL = "RESET/SET_MAIL";
export const SET_NEW_PASSWORD = "RESET/SET_NEW_PASSWORD";
export const TOGGLE_PASSWORD_VISIBILITY = "RESET/TOGGLE_PASSWORD_VISIBILITY";
export const SET_CONFIRMATION_CODE = "RESET/SET_CONFIRMATION_CODE";
export const SET_IS_LOADING = "RESET/SET_IS_LOADING";
export const SET_IS_SENT = "RESET/SET_IS_SENT";
export const CLEAR = "RESET/CLEAR";

export const setMail = (value) => ({ type: SET_MAIL, payload: value });
export const setNewPassword = (value) => ({ type: SET_NEW_PASSWORD, payload: value });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });
export const setConfirmationCode = (value) => ({ type: SET_CONFIRMATION_CODE, payload: value });
export const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
export const setIsSent = (value) => ({ type: SET_IS_SENT, payload: value });
export const clear = () => ({ type: CLEAR });
