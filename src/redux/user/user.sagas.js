import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  auth,
  createUserAuthDocument,
  googleProvider,
  getLoggeInUser,
} from "../../firebase/firebase.util";
import { signInSuccess, signInFailure, signOutSuccess } from "./user.actions";

function* signInWithGoogle() {
  try {
    var { user } = yield auth.signInWithPopup(googleProvider);
    yield saveUserToRedux(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogleStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* saveUserToRedux(user) {
  var userRef = yield call(createUserAuthDocument, user);
  var snapshot = yield userRef.get();
  yield put(
    signInSuccess({
      id: snapshot.id,
      ...snapshot.data(),
    })
  );
}

function* signOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT, function* () {
    try {
      yield auth.signOut();
      yield put(signOutSuccess());
    } catch (error) {}
  });
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    var { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield saveUserToRedux(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmailAndPasswordStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

function* persistLoginSession() {
  const userAuth = yield getLoggeInUser();
  if (!userAuth) {
    return;
  }

  yield saveUserToRedux(userAuth);
}

function* persistUserSession() {
  yield takeLatest(UserActionTypes.PERSIST_USER_SESSION, persistLoginSession);
}

export default function* userSagas() {
  yield all([
    call(signInWithGoogleStart),
    call(signOut),
    call(signInWithEmailAndPasswordStart),
    call(persistUserSession),
  ]);
}
