import {
  USER_HAS_AUTHENTICATED
} from "./actions";

const initialState = { isAuthenticated: false };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_HAS_AUTHENTICATED:
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };

    default:
      return state;
  }
}
