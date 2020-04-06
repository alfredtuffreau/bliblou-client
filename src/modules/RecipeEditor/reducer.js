import { SET_PICTURE, SET_CURRENT_PICTURE, SET_VALUE, SET_VALID, SET_IS_LOADING, CLEAR } from "./actions";

const CONTENT_ID = "content";

const initialState = {
  [ CONTENT_ID ]: { id: CONTENT_ID, value: undefined, isValid: undefined, isHover: false }, 
  picture: undefined,
  isLoading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PICTURE: 
      return ({ ...state, picture: { ...action.payload } });

    case SET_CURRENT_PICTURE: 
      const currentPicture = action.payload;
      return ({ ...state, currentPicture });

    case SET_VALUE: {
      const { id, value } = action.payload;
      return ({ 
        ...state,
        [ id ]: { ...state[id], value }
      });
    };
    
    case SET_VALID: {
      const { id, isValid } = action.payload;
      return ({ 
        ...state, 
        [ id ]: { ...state[id], isValid } 
      });
    };

		case SET_IS_LOADING:
			const isLoading = action.payload;
			return ({ ...state, isLoading });

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
