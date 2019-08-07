import {
  SET_MAIL,
  SET_PASSWORD,
  TOGGLE_PASSWORD_VISIBILITY,
  SET_CONFIRMATION_CODE,
  SET_IS_LOADING,
  CLEAR,
} from "./actions";

const initialState = {
  mail: "",
  password: "",
  confirmationCode: "",
  isPasswordVisible: false, 
  isLoading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MAIL:
      const mail = action.payload;
      return { ...state, mail };

    case SET_PASSWORD:
      const password = action.payload;
      return { ...state, password };

    case TOGGLE_PASSWORD_VISIBILITY:
      const isPasswordVisible = !state.isPasswordVisible;
      return { ...state, isPasswordVisible };

    case SET_CONFIRMATION_CODE:
      const confirmationCode = action.payload;
      return { ...state, confirmationCode };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
