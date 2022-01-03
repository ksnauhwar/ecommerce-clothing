import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* emptyCartItems() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCartItems);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
