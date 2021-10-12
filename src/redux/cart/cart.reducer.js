import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hideCartDropdown: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CARTDROPDOWN_HIDDEN: {
      return {
        ...state,
        hideCartDropdown: !state.hideCartDropdown,
      };
    }
    case CartActionTypes.ADD_ITEM: {
      let newCartItems = [];

      if (state.cartItems.find((item) => action.payload.id === item.id)) {
        newCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case CartActionTypes.REMOVE_ITEM: {
      let newCartItems = [...state.cartItems];

      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        newCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
      }

      return {
        ...state,
        cartItems: newCartItems.filter((item) => item.quantity !== 0),
      };
    }
    case CartActionTypes.CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case CartActionTypes.CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
