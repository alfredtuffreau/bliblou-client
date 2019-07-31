export const SET_MAIL = "CONFIRM/SET_MAIL";
export const SET_PASSWORD = "CONFIRM/SET_PASSWORD";

export const SET_IS_LOADING = "CONFIRM/SET_IS_LOADING";
export const SET_CONFIRMATION_CODE = "CONFIRM/SET_CONFIRMATION_CODE";
export const CLEAR = "CONFIRM/CLEAR";

export const setMail = (value) => ({ type: SET_MAIL, payload: value });
export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });
export const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
export const setConfirmationCode = (value) => ({ type: SET_CONFIRMATION_CODE, payload: value });
export const clear = () => ({ type: CLEAR });
