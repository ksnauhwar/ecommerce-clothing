import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  auth,
  createUserAuthDocument,
  googleProvider,
  getLoggedInUser,
} from "../../firebase/firebase.util";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

function* signInWithGoogle() {
  try {
    var { user } = yield auth.signInWithPopup(googleProvider);
    yield saveUserToRedux(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* saveUserToRedux(user, additionalData) {
  var userRef = yield call(createUserAuthDocument, user, additionalData);
  var snapshot = yield userRef.get();
  yield put(
    signInSuccess({
      id: snapshot.id,
      ...snapshot.data(),
    })
  );
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT, signOut);
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    var { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield saveUserToRedux(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* createUserCredentials({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* persistLoginSession() {
  try {
    const user = yield getLoggedInUser();
    if (!user) {
      return;
    }
    yield saveUserToRedux(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* createUser({ payload: { user, additionalData } }) {
  try {
    yield saveUserToRedux(user, additionalData);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* onSignInWithGoogleStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onSignInWithEmailAndPasswordStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

function* onPersistUserSession() {
  yield takeLatest(UserActionTypes.PERSIST_USER_SESSION, persistLoginSession);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, createUser);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, createUserCredentials);
}

export default function* userSagas() {
  yield all([
    call(onSignInWithGoogleStart),
    call(onSignOut),
    call(onSignInWithEmailAndPasswordStart),
    call(onPersistUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
