import {
	SET_VALUE,
	SET_VALID,
	TOGGLE_HOVER,
	TOGGLE_PASSWORD_VISIBILITY,
	SET_IS_LOADING,
	SET_NEW_USER,
	CLEAR,
} from "./actions";

const initialState = {
  firstname: { value: "", isValid: undefined, isHover: false },
  lastname: { value: "", isValid: undefined, isHover: false },
  mail: { value: "", isValid: undefined, isHover: false },
  password: { value: "", isValid: undefined, isHover: false, isClear: false },
	gender: { value: "", isValid: undefined, isHover: false },
	confirmationCode: { value: "" },
  isLoading: false,
	newUser: undefined,
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

    case TOGGLE_PASSWORD_VISIBILITY:
      const isClear = !state.password.isClear;
      return ({ 
				...state, 
				password: { ...state.password, isClear }
			});

		case SET_IS_LOADING:
			const isLoading = action.payload;
			return ({ ...state, isLoading });

		case SET_NEW_USER:
			const newUser = action.payload;
			return ({ ...state, newUser });

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
