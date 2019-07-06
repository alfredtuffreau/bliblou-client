export const SET_GENDER = "SIGN_UP/SET_GENDER";
export const SET_FIRSTNAME = "SIGN_UP/SET_FIRSTNAME";
export const SET_FIRSTNAME_VALIDITY = "SIGN_UP/SET_FIRSTNAME_VALIDITY";
export const SET_LASTNAME = "SIGN_UP/SET_LASTNAME";
export const SET_LASTNAME_VALIDITY = "SIGN_UP/SET_LASTNAME_VALIDITY";
export const SET_MAIL = "SIGN_UP/SET_MAIL";
export const SET_PASSWORD = "SIGN_UP/SET_PASSWORD";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_UP/TOGGLE_PASSWORD_VISIBILITY";
export const SET_IS_LOADING = "SIGN_UP/SET_IS_LOADING";
export const SET_CONFIRMATION_CODE = "SIGN_UP/SET_CONFIRMATION_CODE";
export const CLEAR_FORMS = "SIGN_UP/CLEAR_FORMS";
export const HOVER_NAMES_INPUT = "SIGN_UP/HOVER_NAMES_INPUT";
// const SET_GENDER_COLOR = 'REGISTER/SET_COLOR_GENDER';
// const SET_BIRTH_DATE = 'REGISTER/SET_BIRTH_DATE';

export const setGender = (value) => ({ type: SET_GENDER, payload: value });
export const setFirstname = (value) => ({ type: SET_FIRSTNAME, payload: value });
export const setFirstnameValidity = (value) => ({ type: SET_FIRSTNAME_VALIDITY, payload: value });
export const setLastname = (value) => ({ type: SET_LASTNAME, payload: value });
export const setLastnameValidity = (value) => ({ type: SET_LASTNAME_VALIDITY, payload: value });
export const setMail = (value) => ({ type: SET_MAIL, payload: value });
export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });
export const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
export const setConfirmationCode = (value) => ({ type: SET_CONFIRMATION_CODE, payload: value });
export const clearForms = () => ({ type: CLEAR_FORMS });
export const toggleHoverNamesInput = () => ({ type: HOVER_NAMES_INPUT });
// const setGenderColor = createAction(SET_GENDER_COLOR);
// const setBirthDate = createAction(SET_BIRTH_DATE);
