import {
  SET_WITH_BACKGROUND,
  USER_HAS_AUTHENTICATED
} from "./actions";

const initialState = { withBackground: false, isAuthenticated: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_HAS_AUTHENTICATED:
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };

      case SET_WITH_BACKGROUND:
        const withBackground = action.payload;
        return { ...state, withBackground };

    default:
      return state;
  }
}
