import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signInWithEmailAndPassword = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { ...emailAndPassword },
});

export const persistUserSession = () => ({
  type: UserActionTypes.PERSIST_USER_SESSION,
});
