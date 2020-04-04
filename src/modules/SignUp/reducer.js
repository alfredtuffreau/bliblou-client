import {
	SET_VALUE,
	SET_VALID,
	TOGGLE_HOVER,
	TOGGLE_PASSWORD_VISIBILITY,
	SET_IS_LOADING,
	SET_NEW_USER,
	CLEAR,
} from "./actions";

const FIRSTNAME_ID = "firstname",
			LASTNAME_ID = "lastname",
			MAIL_ID = "mail",
			PASSWORD_ID = "password",
			GENDER_ID = "gender",
			CONFIRMATION_CODE_ID = "confirmationCode";

const initialState = {
  [ FIRSTNAME_ID ]: { id: FIRSTNAME_ID, value: "", isValid: undefined, isHover: false },
  [ LASTNAME_ID ]: { id: LASTNAME_ID, value: "", isValid: undefined, isHover: false },
  [ MAIL_ID ]: { id: MAIL_ID, value: "", isValid: undefined, isHover: false },
  [ PASSWORD_ID ]: { id: PASSWORD_ID, value: "", isValid: undefined, isHover: false, isClear: false },
	[ GENDER_ID ]: { id: GENDER_ID, value: "", isValid: undefined, isHover: false },
	[ CONFIRMATION_CODE_ID ]: { id: CONFIRMATION_CODE_ID, value: "", isValid: undefined, isHover: false  },
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
