import { firestore, getShopCollections } from "../../firebase/firebase.util";
import SHOP_ACTION_TYPES from "./shop.types";

const fetchCollectionsStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionFailure = (errorMessage) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsAsync = function () {
  return function (dispatch, getState) {
    var collectionsRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionsRef
      .get()
      .then(function (snapshot) {
        var collectionsMap = getShopCollections(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
