import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartItems() {
  yield put(clearCart());
}

function* userSignedOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems);
}

export default function* cartSagas() {
  yield all([call(userSignedOut)]);
}
