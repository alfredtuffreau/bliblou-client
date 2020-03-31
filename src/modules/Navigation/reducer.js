import {
  SET_FOOTER_HEIGHT,
  USER_HAS_AUTHENTICATED,
  USER_IS_EDITOR
} from "./actions";

const initialState = { footerHeight: 0, isAuthenticated: undefined,  isEditor: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_HAS_AUTHENTICATED:
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };

    case USER_IS_EDITOR:
      const isEditor = action.payload;
      return { ...state, isEditor };

      case SET_FOOTER_HEIGHT:
        const footerHeight = action.payload;
        return { ...state, footerHeight };

    default:
      return state;
  }
}
