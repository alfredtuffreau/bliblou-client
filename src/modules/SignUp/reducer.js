import {
  SET_GENDER,
  SET_FIRSTNAME,
  SET_FIRSTNAME_VALIDITY,
  SET_LASTNAME,
  SET_LASTNAME_VALIDITY,
  SET_MAIL,
  SET_PASSWORD,
  TOGGLE_PASSWORD_VISIBILITY,
  SET_IS_LOADING,
  SET_CONFIRMATION_CODE,
  CLEAR_FORMS,
  HOVER_NAMES_INPUT,
} from "./actions";

const initialState = {
  gender: "",
  firstname: "",
  isFirstnameValid: undefined,
  lastname: "",
  isLastnameValid: undefined,
  mail: "",
  isPasswordVisible: false,
  password: "",
  isLoading: false,
  confirmationCode: "",
  isHoverNamesInput: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GENDER:
      const gender = action.payload;
      return { ...state, gender };

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

    case SET_MAIL:
      const mail = action.payload;
      return { ...state, mail };

    case SET_PASSWORD:
      const password = action.payload;
      return { ...state, password };

    case TOGGLE_PASSWORD_VISIBILITY:
      const isPasswordVisible = !state.isPasswordVisible;
      return { ...state, isPasswordVisible };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case SET_CONFIRMATION_CODE:
      const confirmationCode = action.payload;
      return { ...state, confirmationCode };

    case CLEAR_FORMS:
      return initialState;

    case HOVER_NAMES_INPUT:
        const isHoverNamesInput = !state.isHoverNamesInput;
        return { ...state, isHoverNamesInput };

    default:
      return state;
  }
}
