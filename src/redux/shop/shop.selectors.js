import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) =>
  shop.collections ? Object.values(shop.collections) : null
);

export const selectShopCollection = memoize((collectionId) =>
  createSelector([selectShop], (shop) =>
    shop.collections ? shop.collections[collectionId] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  function (shop) {
    return shop.isFetching;
  }
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  function (shop) {
    return !!shop.collections;
  }
);
