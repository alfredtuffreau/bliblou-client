import {
  SET_WITH_BACKGROUND,
  USER_HAS_AUTHENTICATED,
  USER_IS_EDITOR
} from "./actions";

const initialState = { withBackground: false, isAuthenticated: undefined,  isEditor: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_HAS_AUTHENTICATED:
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };

    case USER_IS_EDITOR:
      const isEditor = action.payload;
      return { ...state, isEditor };

      case SET_WITH_BACKGROUND:
        const withBackground = action.payload;
        return { ...state, withBackground };

    default:
      return state;
  }
}
