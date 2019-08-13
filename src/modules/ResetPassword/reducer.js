// import {
//   SET_MAIL,
//   SET_NEW_PASSWORD,
//   TOGGLE_PASSWORD_VISIBILITY,
//   SET_CONFIRMATION_CODE,
//   CLEAR,
// } from "./actions";
import {
	SET_VALUE,
	SET_VALID,
	TOGGLE_HOVER,
	SET_IS_LOADING,
	SET_IS_SENT,
	CLEAR,
} from "./actions";

const initialState = {
  mail: { value: "", isValid: undefined, isHover: false },
//   newPassword: "",
//   confirmationCode: "",
//   isPasswordVisible: false, 
  isLoading: false,
  isSent: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_VALUE: {
      const { field, value } = action.payload;
      return ({ 
				...state, 
				[ field ]: { ...state[field], value } 
			});
		};
			
		case SET_VALID: {
			const { field, isValid } = action.payload;
			return ({ 
				...state, 
				[ field ]: { ...state[field], isValid } 
			});
		};
			
		case TOGGLE_HOVER: {
			const { field } = action.payload;
			const isHover = !state[field].isHover;
			return ({ 
				...state, 
				[ field ]: { ...state[field], isHover } 
			});
		};

//     case TOGGLE_PASSWORD_VISIBILITY:
//       const isPasswordVisible = !state.isPasswordVisible;
//       return { ...state, isPasswordVisible };

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

    case SET_IS_SENT:
      const isSent = action.payload;
      return { ...state, isSent };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
