import { 
  SET_PICTURE, SET_CURRENT_PICTURE, SET_VALUE, SET_VALID, TOGGLE_HOVER, SET_IS_LOADING, CLEAR 
} from "./actions";

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
      const { field, value } = action.payload;
      return ({ 
        ...state,  
        [ field ]: { ...state[field], value }
      });
    }
    
    case SET_VALID: {
      const { field, isValid } = action.payload;
      return ({ 
        ...state, 
        [ field ]: { ...state[field], isValid } 
      });
    }
			
		case TOGGLE_HOVER: {
			const { field } = action.payload;
			const isHover = !state[field].isHover;
			return ({ 
				...state, 
				[ field ]: { ...state[field], isHover } 
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
