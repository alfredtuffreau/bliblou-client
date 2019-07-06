import {
  USER_HAS_AUTHENTICATED, USER_IS_AUTHENTICATING, SET_NEW_USER
} from "./actions";

const initialState = { isAuthenticated: false, isAuthenticating: true };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_HAS_AUTHENTICATED:
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };

    case USER_IS_AUTHENTICATING:
      const isAuthenticating = action.payload;
      return { ...state, isAuthenticating };

    case SET_NEW_USER:
      const newUser = action.payload;
      return { ...state, newUser };

    default:
      return state;
  }
}
