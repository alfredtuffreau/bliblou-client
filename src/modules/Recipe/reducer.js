import { SET_PICTURE } from "./actions";

const initialState = {
  content: undefined, 
  picture: undefined
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PICTURE: 
      return ({ ...state, picture: { ...action.payload } });
		
    default:
      return state;
  }
}
