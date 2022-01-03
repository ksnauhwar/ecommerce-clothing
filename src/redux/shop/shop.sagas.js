import { takeLatest, call, put, all } from "redux-saga/effects";

import SHOP_ACTION_TYPES from "./shop.types";
import {
  fetchCollectionFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
import { firestore, getShopCollections } from "../../firebase/firebase.util";

function* fetchCollectionsAsync() {
  try {
    var collectionsRef = yield firestore.collection("collections");
    var snapshot = yield collectionsRef.get();
    var collectionsMap = yield call(getShopCollections, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

function* onFetchCollections() {
  yield takeLatest(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([call(onFetchCollections)]);
}
