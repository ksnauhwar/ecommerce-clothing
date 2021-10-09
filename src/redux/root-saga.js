import { all, call } from "redux-saga/effects";

import { fetchCollections } from "./shop/shop.sagas";
import userSagas from "./user/user.sagas";

export default function* () {
  yield all([call(fetchCollections), call(userSagas)]);
}
