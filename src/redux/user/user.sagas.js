import { takeLatest, call, all, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  auth,
  createUserAuthDocument,
  googleProvider,
} from "../../firebase/firebase.util";

import { googleSignInFailure, googleSignInSuccess } from "./user.actions";

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserAuthDocument, user);
    const snapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

function* googleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export default function* userSagas() {
  yield all([call(googleSignInStart)]);
}
