import { SET_CATALOG, SET_IS_LOADING, SET_INFO_INDEX } from "./actions";

const initialState = { catalog: [], infoIndex: undefined };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

		case SET_CATALOG:
			const catalog = action.payload;
      return ({ ...state, catalog });

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return ({ ...state, isLoading });

    case SET_INFO_INDEX:
      const { listIndex, cardIndex } = action.payload;
      return ({ 
        ...state, 
        info: state.info && listIndex === state.info.listIndex && cardIndex === state.info.cardIndex
          ? undefined
          : { listIndex, cardIndex }
      });
      
    default:
      return state;
  }
}
