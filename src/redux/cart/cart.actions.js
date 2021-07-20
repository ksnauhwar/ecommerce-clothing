import CartActionTypes from './cart.types';


export const toggleCartDropdown = () => ({type:CartActionTypes.TOGGLE_CARTDROPDOWN_HIDDEN});

export const addItem = item => ({type:CartActionTypes.ADD_ITEM,payload:{...item}});

export const removeItem = item => ({type:CartActionTypes.REMOVE_ITEM,payload:{...item}});

export const clearItemFromCart = id => ({type:CartActionTypes.CLEAR_ITEM_FROM_CART,payload:id});