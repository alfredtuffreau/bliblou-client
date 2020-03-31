import { SET_IS_LOADING, SET_CONTENT, SET_PICTURE, SET_SRC, CLEAR } from "./actions";

const initialState = {
  content: undefined, 
  picture: undefined,
  isLoading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
		case SET_IS_LOADING:
			const isLoading = action.payload;
    	return ({ ...state, isLoading });
    
    case SET_CONTENT:
      const content = action.payload;
      return ({ ...state, content });
  
    case SET_PICTURE:
      const picture = action.payload;
      return ({ ...state, picture });

    case SET_SRC:
      const src = action.payload;
      return ({ ...state, src });

    case CLEAR:
      return initialState;
		
    default:
      return state;
  }
}
