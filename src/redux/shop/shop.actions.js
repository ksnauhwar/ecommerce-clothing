import SHOP_ACTION_TYPES from "./shop.types";

export const updateCollection = (collections) => ({
  type: SHOP_ACTION_TYPES.UPDATE_COLLECTION,
  payload: collections,
});
