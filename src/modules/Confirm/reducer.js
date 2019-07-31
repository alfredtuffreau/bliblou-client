import {
  SET_MAIL,
  SET_PASSWORD,
  SET_IS_LOADING,
  SET_CONFIRMATION_CODE,
  CLEAR,
} from "./actions";

const initialState = {
  mail: "",
  password: "",
  isLoading: false,
  confirmationCode: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MAIL:
      const mail = action.payload;
      return { ...state, mail };

    case SET_PASSWORD:
      const password = action.payload;
      return { ...state, password };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case SET_CONFIRMATION_CODE:
      const confirmationCode = action.payload;
      return { ...state, confirmationCode };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
