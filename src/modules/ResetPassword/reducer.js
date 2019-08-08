import {
  SET_MAIL,
  SET_NEW_PASSWORD,
  TOGGLE_PASSWORD_VISIBILITY,
  SET_CONFIRMATION_CODE,
  SET_IS_LOADING,
  SET_IS_SENT,
  CLEAR,
} from "./actions";

const initialState = {
  mail: "",
  newPassword: "",
  confirmationCode: "",
  isPasswordVisible: false, 
  isLoading: false,
  isSent: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MAIL:
      const mail = action.payload;
      return { ...state, mail };

    case SET_NEW_PASSWORD:
      const newPassword = action.payload;
      return { ...state, newPassword };

    case TOGGLE_PASSWORD_VISIBILITY:
      const isPasswordVisible = !state.isPasswordVisible;
      return { ...state, isPasswordVisible };

    case SET_CONFIRMATION_CODE:
      const confirmationCode = action.payload;
      return { ...state, confirmationCode };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case SET_IS_SENT:
      const isSent = action.payload;
      return { ...state, isSent };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
