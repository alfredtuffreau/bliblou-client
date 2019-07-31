export const SET_GENDER = "SIGN_UP/SET_GENDER";
export const SET_GENDER_VALIDITY = "SIGN_UP/SET_GENDER_VALIDITY";
export const HOVER_GENDER_INPUT = "SIGN_UP/HOVER_GENDER_INPUT";

export const SET_FIRSTNAME = "SIGN_UP/SET_FIRSTNAME";
export const SET_FIRSTNAME_VALIDITY = "SIGN_UP/SET_FIRSTNAME_VALIDITY";
export const SET_LASTNAME = "SIGN_UP/SET_LASTNAME";
export const SET_LASTNAME_VALIDITY = "SIGN_UP/SET_LASTNAME_VALIDITY";
export const HOVER_NAMES_INPUT = "SIGN_UP/HOVER_NAMES_INPUT";

export const SET_MAIL = "SIGN_UP/SET_MAIL";
export const SET_MAIL_VALIDITY = "SIGN_UP/SET_MAIL_VALIDITY";
export const HOVER_MAIL_INPUT = "SIGN_UP/HOVER_MAIL_INPUT";

export const SET_PASSWORD = "SIGN_UP/SET_PASSWORD";
export const SET_PASSWORD_VALIDITY = "SIGN_UP/SET_PASSWORD_VALIDITY";
export const TOGGLE_PASSWORD_VISIBILITY = "SIGN_UP/TOGGLE_PASSWORD_VISIBILITY";
export const HOVER_PASSWORD_INPUT = "SIGN_UP/HOVER_PASSWORD_INPUT";

export const SET_IS_LOADING = "SIGN_UP/SET_IS_LOADING";
export const CLEAR = "SIGN_UP/CLEAR";
// const SET_GENDER_COLOR = 'REGISTER/SET_COLOR_GENDER';
// const SET_BIRTH_DATE = 'REGISTER/SET_BIRTH_DATE';

export const setGender = (value) => ({ type: SET_GENDER, payload: value });
export const setGenderValidity = (value) => ({ type: SET_GENDER_VALIDITY, payload: value });
export const toggleHoverGenderInput = () => ({ type: HOVER_GENDER_INPUT });

export const setFirstname = (value) => ({ type: SET_FIRSTNAME, payload: value });
export const setFirstnameValidity = (value) => ({ type: SET_FIRSTNAME_VALIDITY, payload: value });
export const setLastname = (value) => ({ type: SET_LASTNAME, payload: value });
export const setLastnameValidity = (value) => ({ type: SET_LASTNAME_VALIDITY, payload: value });
export const toggleHoverNamesInput = () => ({ type: HOVER_NAMES_INPUT });

export const setMail = (value) => ({ type: SET_MAIL, payload: value });
export const setMailValidity = (value) => ({ type: SET_MAIL_VALIDITY, payload: value });
export const toggleHoverMailInput = () => ({ type: HOVER_MAIL_INPUT });

export const setPassword = (value) => ({ type: SET_PASSWORD, payload: value });
export const setPasswordValidity = (value) => ({ type: SET_PASSWORD_VALIDITY, payload: value });
export const togglePasswordVisibility = () => ({ type: TOGGLE_PASSWORD_VISIBILITY });
export const toggleHoverPasswordInput = () => ({ type: HOVER_PASSWORD_INPUT });

export const setIsLoading = (value) => ({ type: SET_IS_LOADING, payload: value });
export const clear = () => ({ type: CLEAR });
// const setGenderColor = createAction(SET_GENDER_COLOR);
// const setBirthDate = createAction(SET_BIRTH_DATE);
