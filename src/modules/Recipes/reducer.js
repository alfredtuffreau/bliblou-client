import { SET_CATALOG, SET_IS_LOADING } from "./actions";

const initialState = { catalog: [] };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

		case SET_CATALOG:
			const catalog = action.payload;
      return ({ ...state, catalog });

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return ({ ...state, isLoading });
      
    default:
      return state;
  }
}
