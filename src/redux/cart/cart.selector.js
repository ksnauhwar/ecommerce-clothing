import  { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    cart => cart.hideCartDropdown
);

export const selectCartItems = createSelector(
    [selectCart],
    function (cart){
        return cart.cartItems;
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    function (cartItems){
        return cartItems.reduce(function(total,cartItem){
            return total + cartItem.quantity;
        },0)
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    function (cartItems){
        return cartItems.reduce(function(accumulator,cartItem){
            return accumulator + (cartItem.quantity * cartItem.price);
        },0);
    }
)

