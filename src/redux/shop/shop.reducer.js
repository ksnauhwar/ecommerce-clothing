import SHOP_DATA from "./shop.data";
import SHOP_ACTION_TYPES from "./shop.types";

const INITIAL_STATE = SHOP_DATA;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.UPDATE_COLLECTION: {
      return { ...state, collections: action.payload };
    }
    default:
      return state;
  }
};

export default shopReducer;
