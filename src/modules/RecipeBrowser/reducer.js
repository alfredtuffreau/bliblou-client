import { SET_CATALOG, SET_SCROLLS_LEFT, SET_IS_LOADING } from "./actions";

const initialState = { catalog: [], scrollsLeft: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

		case SET_CATALOG:
			const catalog = action.payload;
      return ({ ...state, catalog });

    case SET_SCROLLS_LEFT:
      const scrollsLeft = action.payload;
      return ({ ...state, scrollsLeft });

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return ({ ...state, isLoading });
      
    default:
      return state;
  }
}
