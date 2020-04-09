import {
  SET_FOOTER_HEIGHT,
  LOGGED_IN,
  LOGGED_OUT,
} from "./actions";

const initialState = { footerHeight: 0, isAuthenticated: undefined, groups: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      const groups = action.payload;
      return { ...state, isAuthenticated: true, groups };

    case LOGGED_OUT:
      return { ...state, isAuthenticated: undefined, groups: undefined };

    case SET_FOOTER_HEIGHT:
      const footerHeight = action.payload;
      return { ...state, footerHeight };

    default:
      return state;
  }
}
