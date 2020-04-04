import {
	SET_VALUE,
	SET_VALID,
	TOGGLE_HOVER,
	TOGGLE_PASSWORD_VISIBILITY,
	SET_IS_LOADING,
	SET_IS_SENT,
	SET_NEED_CONFIRM_SIGN_UP,
	CLEAR,
} from "./actions";

const MAIL_ID = "mail",
			SIGN_UP_CODE_ID = "signUpCode",
			CONFIRMATION_CODE_ID = "confirmationCode",
			PASSWORD_ID = "password";

const initialState = {
  [ MAIL_ID ]: { id: MAIL_ID, value: "", isValid: undefined, isHover: false },
  [ SIGN_UP_CODE_ID ]: { id: SIGN_UP_CODE_ID, value: "", isValid: undefined, isHover: false },
  [ CONFIRMATION_CODE_ID ]: { id: CONFIRMATION_CODE_ID, value: "", isValid: undefined, isHover: false },
  [ PASSWORD_ID ]: { id: PASSWORD_ID, value: "", isValid: undefined, isHover: false },
	isLoading: false,
	needConfirmSignUp: false,
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

    case TOGGLE_PASSWORD_VISIBILITY:
      const isClear = !state.password.isClear;
      return ({ 
				...state, 
				password: { ...state.password, isClear }
			});

    case SET_IS_LOADING:
      const isLoading = action.payload;
      return { ...state, isLoading };

		case SET_IS_SENT:
			const isSent = action.payload;
			return { ...state, isSent };

		case SET_NEED_CONFIRM_SIGN_UP:
			const needConfirmSignUp = action.payload;
			return { ...state, needConfirmSignUp };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}
