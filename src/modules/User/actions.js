export const USER_HAS_AUTHENTICATED = "USER/HAS_AUTHENTICATED";
export const USER_IS_AUTHENTICATING = "USER/IS_AUTHENTICATED";
export const SET_NEW_USER = "USER/NEW_USER";

export const userHasAuthenticated = (value) => ({ type: USER_HAS_AUTHENTICATED, payload: value });
export const userIsAuthenticating = (value) => ({ type: USER_IS_AUTHENTICATING, payload: value });
export const setNewUser = (value) => ({ type: SET_NEW_USER, payload: value });
