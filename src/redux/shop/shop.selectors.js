import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) =>
  Object.values(shop.collections)
);

export const selectShopCollection = memoize((collectionId) =>
  createSelector([selectShop], (shop) => shop.collections[collectionId])
);
