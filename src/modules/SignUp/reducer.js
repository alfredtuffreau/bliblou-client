import {
  SET_GENDER,
  SET_GENDER_VALIDITY,
  HOVER_GENDER_INPUT,
  SET_FIRSTNAME,
  SET_FIRSTNAME_VALIDITY,
  SET_LASTNAME,
  SET_LASTNAME_VALIDITY,
  HOVER_NAMES_INPUT,
  SET_MAIL,
  SET_MAIL_VALIDITY,
  HOVER_MAIL_INPUT,
  SET_PASSWORD,
  SET_PASSWORD_VALIDITY,
  TOGGLE_PASSWORD_VISIBILITY,
  HOVER_PASSWORD_INPUT,
  SET_IS_LOADING,
  SET_CONFIRMATION_CODE,
  CLEAR_FORMS,
} from "./actions";

const initialState = {
  gender: "",
  isGenderValid: undefined,
  isHoverGenderInput: false,
  firstname: "",
  isFirstnameValid: undefined,
  lastname: "",
  isLastnameValid: undefined,
  isHoverNamesInput: false,
  mail: "",
  isMailValid: undefined,
  isHoverMailInput: false,
  isPasswordVisible: false,
  password: "",
  isPasswordValid: undefined,
  isHoverPasswordInput: false,
  isLoading: false,
  confirmationCode: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GENDER:
      const gender = action.payload;
      return { ...state, gender };

    case SET_GENDER_VALIDITY:
      const isGenderValid = action.payload;
      return { ...state, isGenderValid };

    case HOVER_GENDER_INPUT:
        const isHoverGenderInput = !state.isHoverGenderInput;
        return { ...state, isHoverGenderInput };

    case SET_FIRSTNAME:
      const firstname = action.payload;
      return { ...state, firstname };

    case SET_FIRSTNAME_VALIDITY:
      const isFirstnameValid = action.payload;
      return { ...state, isFirstnameValid };

    case SET_LASTNAME:
      const lastname = action.payload;
      return { ...state, lastname };

    case SET_LASTNAME_VALIDITY:
      const isLastnameValid = action.payload;
      return { ...state, isLastnameValid };

    case HOVER_NAMES_INPUT:
        const isHoverNamesInput = !state.isHoverNamesInput;
        return { ...state, isHoverNamesInput };

    case SET_MAIL:
      const mail = action.payload;
      return { ...state, mail };

    case SET_MAIL_VALIDITY:
      const isMailValid = action.payload;
      return { ...state, isMailValid };

    case HOVER_MAIL_INPUT:
      const isHoverMailInput = !state.isHoverMailInput;
      return { ...state, isHoverMailInput };

    case SET_PASSWORD:
      const password = action.payload;
      return { ...state, password };

    case SET_PASSWORD_VALIDITY:
      const isPasswordValid = action.payload;
      return { ...state, isPasswordValid };

    case TOGGLE_PASSWORD_VISIBILITY:
      const isPasswordVisible = !state.isPasswordVisible;
      return { ...state, isPasswordVisible };

    case HOVER_PASSWORD_INPUT:
        const isHoverPasswordInput = !state.isHoverPasswordInput;
        return { ...state, isHoverPasswordInput };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case SET_CONFIRMATION_CODE:
      const confirmationCode = action.payload;
      return { ...state, confirmationCode };

    case CLEAR_FORMS:
      return initialState;

    default:
      return state;
  }
}
