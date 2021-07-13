import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hideCartDropdown:true,
    cartItems:[]
}


const cartReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CARTDROPDOWN_HIDDEN:{
            return {
                ...state,
                hideCartDropdown:!state.hideCartDropdown
            };
        }
        case CartActionTypes.ADD_ITEM:{
            let newCartItems = [];

            if(state.cartItems.find(item => action.payload.id === item.id)){
               newCartItems = state.cartItems.map(item => (
                item.id === action.payload.id ? {...item,quantity:item.quantity + 1} : item
               )); 
            }else{
                newCartItems = [...state.cartItems,{...action.payload,quantity:1}];
            }

            return {
                ...state,
                cartItems: newCartItems
            }
        }
        default:{
            return state;
        }
    }
}

export default cartReducer;