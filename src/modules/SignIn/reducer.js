import {
	SET_VALUE,
	TOGGLE_PASSWORD_VISIBILITY,
	SET_IS_LOADING,
	CLEAR,
} from "./actions";

const initialState = {
  mail: { value: "" },
  password: { value: "", isClear: false },
  isLoading: false,
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

    case TOGGLE_PASSWORD_VISIBILITY:
      const isClear = !state.password.isClear;
      return ({ 
				...state, 
				password: { ...state.password, isClear }
			});

		case SET_IS_LOADING:
			const isLoading = action.payload;
			return ({ ...state, isLoading });

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

